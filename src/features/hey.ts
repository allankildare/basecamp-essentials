// Packages
import $ from "jquery";

/**
 * Renders
 */

export const renderIgnoreHey = (): void => {
  const hasIgnoreHeyButton = $(".btn-hideUnmarked").length;

  if (hasIgnoreHeyButton) {
    return;
  }

  $("section.readings--unreads")
    .find(".txt--subtle")
    .append(
      `<button class="btn btn-outline-info btn-lg btn-hideUnmarked" style="padding: 0px 4px 0px 4px; font-size: 1.2rem; color: grey;">Hide unmarked</button>`
    );
};

/**
 * Event Handlers
 */

export const createIgnoreHeyEventHandlers = (): void => {
  $("section.readings--unreads")
    .off()
    .on("click", ".btn-hideUnmarked", function () {
      $(".content-type-icon--mention")
        .closest("article")
        .addClass("has-mention");
      $("article.reading:not(.has-mention)").hide();
    });
};
