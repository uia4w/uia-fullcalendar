sap.ui.define([
    'jquery.sap.global'
], function(
    jQuery
) {
    "use strict";

    /**
     * EventSourceCalendarRenderer renderer.
     * 
     * @static
     * @namespace
     */
    var EventSourceCalendarRenderer = {};

    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     *
     * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
     * @param {sap.ui.core.Control} oCalendar An object representation of the control that should be rendered.
     */
    EventSourceCalendarRenderer.render = function(oRm, oCalendar) {
        oRm.write("<div class='uia-fullcalendar'");
        oRm.writeControlData(oCalendar);
        oRm.write("></div>");
    };


    return EventSourceCalendarRenderer;

}, /* bExport= */ true);
