// This is an object created by the Javascript run time enging and passed to an event handler

// Event Ojbect Properties (these are read only)
// bubbles (true or false based on whether the even bubbles to its parents or not)
// cancelable (whether or not we can cancel any propogation)
// currentTarget (the DOM element we are currently looking at)
// defaultPrevented (a boolean value telling us whether preventDefault() was called)
// detail (extra information about the event)
// eventPhase (1, 2 or 3. 1 is at the capture phase, 2 at the target, 3 in process of bubbling)
// preventDefault() (prevent the browser for handling default behavior, like submit on a form)
// stopImmediatePropagation() (will stop all event capture and bubbling and also make sure no more handlers get called )
// stopPropogation() (will stop all event capture and bubbling)
// target (set to the orginal event, for example a click)
// trusted (true if the event comes from a browser and false if triggered through javascript code)
// type (the name of the event, for example 'click' for a click event)