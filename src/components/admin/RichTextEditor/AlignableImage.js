import TiptapImage from "@tiptap/extension-image";

/**
 * Tiptap's own extension-image ships a `resize` option that lands
 * width/height as plain HTML attributes on the serialized <img> - that part
 * is used as-is via `.configure({ resize: {...} })` where this extension is
 * registered.
 *
 * Alignment isn't built in, so this adds one extra `align` attribute whose
 * `renderHTML` writes a real inline `style` (display:block + margin) plus a
 * `data-align` attribute that `parseHTML` reads back on re-open. The result
 * is plain HTML/CSS with no Tiptap-specific markup, so it renders identically
 * whether viewed live in the editor or cold on the public page via
 * `dangerouslySetInnerHTML` with zero JS - unlike the common community
 * resize/align packages, which round-trip state through non-standard
 * `containerstyle`/`wrapperstyle` attributes that only mean anything to
 * their own live parser.
 */
const MARGIN_BY_ALIGN = {
  left: "0.75rem auto 0.75rem 0",
  center: "0.75rem auto",
  right: "0.75rem 0 0.75rem auto",
};

const AlignableImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent(),
      align: {
        default: "left",
        parseHTML: (element) => element.getAttribute("data-align") || "left",
        renderHTML: (attributes) => {
          const align = MARGIN_BY_ALIGN[attributes.align] ? attributes.align : "left";
          return {
            "data-align": align,
            style: `display: block; max-width: 100%; margin: ${MARGIN_BY_ALIGN[align]};`,
          };
        },
      },
    };
  },
});

export default AlignableImage;
