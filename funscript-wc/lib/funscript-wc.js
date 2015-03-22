var CompositeDisposable = require('atom').CompositeDisposable;

function wrappedFunScript() {
var WordCount__showAndIncrement$, WordCount__deactivate$, WordCount__activate$, WordCount___ctor$, TupleString_Int32, CompositeDisposable__subscribe$, CompositeDisposable__dispose$, CompositeDisposable__create$, Atom__getEditorText$, Atom__getActiveTextEditor$, Atom__addCommand$Object_Object_;
Atom__addCommand$Object_Object_ = (function(name,cmdName,func)
{
    var cmd = {}; cmd[cmdName]=function() { return func(); }; return atom.commands.add(name, cmd);;
});
Atom__getActiveTextEditor$ = (function(unitVar0) 
{
    return atom.workspace.getActiveTextEditor();;
});
Atom__getEditorText$ = (function(ed)
{
    return ed.getText();;
});
CompositeDisposable__create$ = (function(unitVar0)
{
    return new CompositeDisposable;;
});
CompositeDisposable__dispose$ = (function(cd)
{
    return cd.dispose();;
});
CompositeDisposable__subscribe$ = (function(cd,cmd)
{
    return cd.add(cmd);;
});
TupleString_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
WordCount___ctor$ = (function(unitVar0)
{
    var __this = this;
    {};
    __this.count = 0;
    __this.cd = CompositeDisposable__create$();
});
WordCount__activate$ = (function(x,state)
{
    CompositeDisposable__subscribe$(x.cd, Atom__addCommand$Object_Object_("atom-workspace", "funscript-wc:toggle", (function(unitVar0)
    {
      var tupledArg = (new TupleString_Int32("toggle", 1));
      var msg = tupledArg.Items[0.000000];
      var by = tupledArg.Items[1.000000];
      return WordCount__showAndIncrement$(x, msg, by);
    })));
    var tupledArg = (new TupleString_Int32("activate", 0));
    var msg = tupledArg.Items[0.000000];
    var by = tupledArg.Items[1.000000];
    return WordCount__showAndIncrement$(x, msg, by);
});
WordCount__deactivate$ = (function(x,unitVar1)
{
    return CompositeDisposable__dispose$(x.cd);
});
WordCount__showAndIncrement$ = (function(_this,msg,by)
{
    _this.count = (_this.count + by);
    var text = Atom__getEditorText$(Atom__getActiveTextEditor$());
    var textLength = text.length.toString();
    return ((window.window).alert(((((("Command: " + msg) + "\nCount: ") + _this.count.toString()) + "\nText length: ") + textLength)));
});
return [(function(ign)
{
    return (new WordCount___ctor$());
}), (function(_this)
{
    return (function(p0)
    {
      return WordCount__activate$(_this, p0);
    });
}), (function(_this)
{
    return WordCount__deactivate$(_this);
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

module.exports = FunscriptWc = {
activate: function(p1) {
  return _funcs[1](_self)(p1); },
deactivate: function() {
  return _funcs[2](_self); }
};
