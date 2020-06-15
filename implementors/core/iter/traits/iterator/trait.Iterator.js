(function() {var implementors = {};
implementors["bstr"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Find.html\" title=\"struct bstr::Find\">Find</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::Find"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.FindReverse.html\" title=\"struct bstr::FindReverse\">FindReverse</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::FindReverse"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Bytes.html\" title=\"struct bstr::Bytes\">Bytes</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::Bytes"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Fields.html\" title=\"struct bstr::Fields\">Fields</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::Fields"]},{"text":"impl&lt;'a, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.FieldsWith.html\" title=\"struct bstr::FieldsWith\">FieldsWith</a>&lt;'a, F&gt;","synthetic":false,"types":["bstr::ext_slice::FieldsWith"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Split.html\" title=\"struct bstr::Split\">Split</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::Split"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.SplitReverse.html\" title=\"struct bstr::SplitReverse\">SplitReverse</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::SplitReverse"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.SplitN.html\" title=\"struct bstr::SplitN\">SplitN</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::SplitN"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.SplitNReverse.html\" title=\"struct bstr::SplitNReverse\">SplitNReverse</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::SplitNReverse"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Lines.html\" title=\"struct bstr::Lines\">Lines</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::Lines"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.LinesWithTerminator.html\" title=\"struct bstr::LinesWithTerminator\">LinesWithTerminator</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_slice::LinesWithTerminator"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.DrainBytes.html\" title=\"struct bstr::DrainBytes\">DrainBytes</a>&lt;'a&gt;","synthetic":false,"types":["bstr::ext_vec::DrainBytes"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/io/struct.ByteLines.html\" title=\"struct bstr::io::ByteLines\">ByteLines</a>&lt;B&gt;","synthetic":false,"types":["bstr::io::ByteLines"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/io/struct.ByteRecords.html\" title=\"struct bstr::io::ByteRecords\">ByteRecords</a>&lt;B&gt;","synthetic":false,"types":["bstr::io::ByteRecords"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Graphemes.html\" title=\"struct bstr::Graphemes\">Graphemes</a>&lt;'a&gt;","synthetic":false,"types":["bstr::unicode::grapheme::Graphemes"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.GraphemeIndices.html\" title=\"struct bstr::GraphemeIndices\">GraphemeIndices</a>&lt;'a&gt;","synthetic":false,"types":["bstr::unicode::grapheme::GraphemeIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Sentences.html\" title=\"struct bstr::Sentences\">Sentences</a>&lt;'a&gt;","synthetic":false,"types":["bstr::unicode::sentence::Sentences"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.SentenceIndices.html\" title=\"struct bstr::SentenceIndices\">SentenceIndices</a>&lt;'a&gt;","synthetic":false,"types":["bstr::unicode::sentence::SentenceIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Words.html\" title=\"struct bstr::Words\">Words</a>&lt;'a&gt;","synthetic":false,"types":["bstr::unicode::word::Words"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.WordIndices.html\" title=\"struct bstr::WordIndices\">WordIndices</a>&lt;'a&gt;","synthetic":false,"types":["bstr::unicode::word::WordIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.WordsWithBreaks.html\" title=\"struct bstr::WordsWithBreaks\">WordsWithBreaks</a>&lt;'a&gt;","synthetic":false,"types":["bstr::unicode::word::WordsWithBreaks"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.WordsWithBreakIndices.html\" title=\"struct bstr::WordsWithBreakIndices\">WordsWithBreakIndices</a>&lt;'a&gt;","synthetic":false,"types":["bstr::unicode::word::WordsWithBreakIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Chars.html\" title=\"struct bstr::Chars\">Chars</a>&lt;'a&gt;","synthetic":false,"types":["bstr::utf8::Chars"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.CharIndices.html\" title=\"struct bstr::CharIndices\">CharIndices</a>&lt;'a&gt;","synthetic":false,"types":["bstr::utf8::CharIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"bstr/struct.Utf8Chunks.html\" title=\"struct bstr::Utf8Chunks\">Utf8Chunks</a>&lt;'a&gt;","synthetic":false,"types":["bstr::utf8::Utf8Chunks"]}];
implementors["intaglio"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"intaglio/bytes/struct.AllSymbols.html\" title=\"struct intaglio::bytes::AllSymbols\">AllSymbols</a>&lt;'a&gt;","synthetic":false,"types":["intaglio::bytes::AllSymbols"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"intaglio/bytes/struct.Bytestrings.html\" title=\"struct intaglio::bytes::Bytestrings\">Bytestrings</a>&lt;'a&gt;","synthetic":false,"types":["intaglio::bytes::Bytestrings"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"intaglio/bytes/struct.Iter.html\" title=\"struct intaglio::bytes::Iter\">Iter</a>&lt;'a&gt;","synthetic":false,"types":["intaglio::bytes::Iter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"intaglio/struct.AllSymbols.html\" title=\"struct intaglio::AllSymbols\">AllSymbols</a>&lt;'a&gt;","synthetic":false,"types":["intaglio::str::AllSymbols"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"intaglio/struct.Strings.html\" title=\"struct intaglio::Strings\">Strings</a>&lt;'a&gt;","synthetic":false,"types":["intaglio::str::Strings"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"intaglio/struct.Iter.html\" title=\"struct intaglio::Iter\">Iter</a>&lt;'a&gt;","synthetic":false,"types":["intaglio::str::Iter"]}];
implementors["memchr"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"memchr/struct.Memchr.html\" title=\"struct memchr::Memchr\">Memchr</a>&lt;'a&gt;","synthetic":false,"types":["memchr::iter::Memchr"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"memchr/struct.Memchr2.html\" title=\"struct memchr::Memchr2\">Memchr2</a>&lt;'a&gt;","synthetic":false,"types":["memchr::iter::Memchr2"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"memchr/struct.Memchr3.html\" title=\"struct memchr::Memchr3\">Memchr3</a>&lt;'a&gt;","synthetic":false,"types":["memchr::iter::Memchr3"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()