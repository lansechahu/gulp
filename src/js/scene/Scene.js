PROJECT.Scene = function ()
{
    PIXI.Container.call(this);
};
PROJECT.Utils.inherit(PROJECT.Scene, PIXI.Container);
PROJECT.Utils.extend(PROJECT.Scene.prototype, PROJECT.EventDispatcher.prototype);
PROJECT.Scene.prototype.init = function (){}
PROJECT.Scene.prototype.destroy = function (){}
PROJECT.Scene.prototype.sceneIn = function ()
{
    this.dispatchEvent(new PROJECT.Event(PROJECT.SCENE_IN));
};
PROJECT.Scene.prototype.sceneOut = function ()
{
    this.dispatchEvent(new PROJECT.Event(PROJECT.SCENE_OUT));
};
PROJECT.Scene.prototype.sceneInComplete = function ()
{
    this.dispatchEvent(new PROJECT.Event(PROJECT.SCENE_IN_COMPLETE));
};
PROJECT.Scene.prototype.sceneOutComplete = function ()
{
    this.dispatchEvent(new PROJECT.Event(PROJECT.SCENE_OUT_COMPLETE));
};
