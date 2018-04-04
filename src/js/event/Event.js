PROJECT.Event=function(type)
{
	this.type=type;
	this.target=null;
};
PROJECT.Event.prototype=
{
	constructor:PROJECT.Event,
    clone:function()
    {
        return new PROJECT.Event(this.type,this.target);
    }
};