# Atom package using FunScript

This is a very minimal example showing how to use FunScript to create atom packages.

## How does this work?
At the moment, we do not have TypeScript based mappings for the atom package, 
so the sample uses `JSEmit` explicitly to wrap the few functions from atom that
it needs to call. This should definitely be improved in the future!

The second tricky thing is that atom expects a very specific format of packages
(you have to export a module), while FunScript generates pretty wild JavaScript.
To address this, the build script generates a translation using FunScript and then
adds some additional wrapping.

Given a class `WordCount` with constructor and methods `activate` and `deactivate`,
we call funscript to translate the following F# code:

```fsharp
[| (fun () -> new WordCount());
   (fun (self:WordCount) a1 -> self.activate(a1));
   (fun (self:WordCount) -> self.deactivate()) |]
```

FunScript gives us back a JavaScript array of functions that is then wrapped in fairly
simple JavaScript code that creates the module:

```js
var _funcs = wrappedFunScript(); // The function returning the array
var _self = _funcs[0](); // Create instance of WordCount

module.exports = FunscriptWc = {
  activate: function(p1) { return _funcs[1](_self)(p1); },
  deactivate: function() { return _funcs[2](_self); }
};
```

## Where are things implemented?

 - `src/wordcount.fsx` implements a simple package (with necessary atom mappings)
 - `build.fsx` implements the JavaScript generation using FunScript
 
 When you run `build` from the command line, the sample generates a JavaScript
 file with the plugin in `funscript-wc/lib/funscript-wc.js` (and the sub-directory
 `funscript-wc` is the atom plugin). This is specified at the beginning of `build.fsx`.
