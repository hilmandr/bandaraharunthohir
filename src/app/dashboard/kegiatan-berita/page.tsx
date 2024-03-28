import { forwardRef, useCallback, useState } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import Container from "@/components/container";
import HeaderDashboard from "@/components/dashboard/header";
import InputBerita from "@/components/dashboard/input-berita";

export default forwardRef<Object, EditorProps>(function RichTextEditor(
  props,
  ref
) {
  return (
    <>
      <div className=" flex w-full bg-white">
        <Container>
          <HeaderDashboard />
          <div className=" flex flex-col w-full mt-10">
            <h1 className=" text-lg font-semibold">
              Input Berita atau Kegiatan
            </h1>
            <div className=" flex w-full">
              <InputBerita />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
});
