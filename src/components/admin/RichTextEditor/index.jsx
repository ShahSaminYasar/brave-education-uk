"use client";
import { useEffect, useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from "@tiptap/extension-youtube";
import axios from "axios";
import { toast } from "sonner";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Image as ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Loader2,
  Pilcrow,
  Quote,
  Redo2,
  Underline as UnderlineIcon,
  Undo2,
  Unlink,
  Youtube as YoutubeIcon,
} from "lucide-react";
import AlignableImage from "./AlignableImage";

const ToolbarButton = ({ onClick, active, disabled, title, children }) => (
  <button
    type="button"
    title={title}
    disabled={disabled}
    onMouseDown={(e) => {
      // Prevent the editor losing focus/selection before the command runs.
      e.preventDefault();
      onClick();
    }}
    className={`p-1.5 rounded-md transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
      active ? "bg-purple-100 text-purple-700" : "text-gray-500 hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

const Divider = () => <span className="w-px h-5 bg-gray-200 mx-1" />;

const RichTextEditor = ({ content, onChange, onReady }) => {
  const fileInputRef = useRef(null);

  const editor = useEditor({
    immediatelyRender: false,
    onCreate: ({ editor }) => onReady?.(editor),
    extensions: [
      StarterKit.configure({
        link: {
          openOnClick: false,
          autolink: true,
        },
      }),
      AlignableImage.configure({
        inline: false,
        resize: {
          enabled: true,
          directions: ["top-left", "top-right", "bottom-left", "bottom-right"],
          minWidth: 80,
          minHeight: 80,
          alwaysPreserveAspectRatio: true,
        },
      }),
      Youtube.configure({
        width: 640,
        height: 360,
        nocookie: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content || "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[260px] px-4 py-3 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  // Keep the editor in sync if `content` is replaced from outside (e.g. the
  // wizard loading an existing event for edit, after the editor already
  // mounted with empty content).
  useEffect(() => {
    if (!editor) return;
    if (content !== undefined && content !== editor.getHTML()) {
      editor.commands.setContent(content || "", { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, content]);

  if (!editor) return null;

  const isImageSelected = editor.isActive("image");

  const setAlign = (align) => {
    if (isImageSelected) {
      editor.chain().focus().updateAttributes("image", { align }).run();
    } else {
      editor.chain().focus().setTextAlign(align).run();
    }
  };

  const isAlignActive = (align) => {
    if (isImageSelected) {
      return editor.getAttributes("image").align === align;
    }
    return editor.isActive({ textAlign: align });
  };

  const handleSetLink = () => {
    const previousUrl = editor.getAttributes("link").href || "";
    const url = window.prompt("Link URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const handleAddYoutube = () => {
    const url = window.prompt("YouTube video URL");
    if (!url) return;
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };

  const handleImageFileChange = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    try {
      const form = new FormData();
      form.append("image", file);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
        form,
      );
      const url = res?.data?.data?.display_url;
      if (url) {
        editor.chain().focus().setImage({ src: url, align: "left" }).run();
      } else {
        toast.error("Image upload failed");
      }
    } catch {
      toast.error("Image upload failed");
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
      <div className="flex flex-wrap items-center gap-0.5 p-1.5 border-b border-gray-200 bg-gray-50/60">
        <ToolbarButton
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Italic"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Underline"
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon size={16} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Paragraph"
          active={editor.isActive("paragraph")}
          onClick={() => editor.chain().focus().setParagraph().run()}
        >
          <Pilcrow size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Heading 1"
          active={editor.isActive("heading", { level: 1 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          <Heading1 size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Heading 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading2 size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Heading 3"
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          <Heading3 size={16} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Bullet list"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Numbered list"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Quote"
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote size={16} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Align left"
          active={isAlignActive("left")}
          onClick={() => setAlign("left")}
        >
          <AlignLeft size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Align center"
          active={isAlignActive("center")}
          onClick={() => setAlign("center")}
        >
          <AlignCenter size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Align right"
          active={isAlignActive("right")}
          onClick={() => setAlign("right")}
        >
          <AlignRight size={16} />
        </ToolbarButton>
        {!isImageSelected && (
          <ToolbarButton
            title="Justify"
            active={isAlignActive("justify")}
            onClick={() => setAlign("justify")}
          >
            <AlignJustify size={16} />
          </ToolbarButton>
        )}

        <Divider />

        <ToolbarButton title="Link" active={editor.isActive("link")} onClick={handleSetLink}>
          <Link2 size={16} />
        </ToolbarButton>
        {editor.isActive("link") && (
          <ToolbarButton
            title="Remove link"
            onClick={() => editor.chain().focus().unsetLink().run()}
          >
            <Unlink size={16} />
          </ToolbarButton>
        )}
        <ToolbarButton title="Insert image" onClick={() => fileInputRef.current?.click()}>
          <ImageIcon size={16} />
        </ToolbarButton>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageFileChange}
          className="hidden"
        />
        <ToolbarButton title="Embed YouTube video" onClick={handleAddYoutube}>
          <YoutubeIcon size={16} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Undo"
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo2 size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Redo"
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo2 size={16} />
        </ToolbarButton>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
