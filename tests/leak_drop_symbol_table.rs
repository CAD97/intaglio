#![deny(clippy::all)]
#![deny(clippy::pedantic)]

use intaglio::SymbolTable;

mod leak;

use leak::Looper;

const ITERATIONS: usize = 100_000;
const LEAK_TOLERANCE: i64 = 1024 * 1024 * 50;

#[test]
fn dealloc_owned_data_str() {
    let table = SymbolTable::with_capacity(0);
    Looper::new("dealloc_owned_data_str", table)
        .with_iterations(ITERATIONS)
        .with_tolerance(LEAK_TOLERANCE)
        .check_leaks_with_finalizer(
            |i, table| {
                #[allow(clippy::cast_possible_truncation)]
                let ch = char::from((i % 256) as u8);
                let len = (i / 256) + 100;
                let symbol = vec![ch; len].into_iter().collect::<String>();
                let sym_id = table.intern(symbol.clone()).unwrap();
                assert!(table.is_interned(&symbol));
                assert!(table.contains(sym_id));
                assert_eq!(Some(symbol.as_str()), table.get(sym_id));
                assert_eq!(sym_id, table.intern(symbol.clone()).unwrap());
                assert!(table.is_interned(&symbol));
                assert!(table.contains(sym_id));
                assert_eq!(Some(symbol.as_str()), table.get(sym_id));
            },
            drop,
        );
}
