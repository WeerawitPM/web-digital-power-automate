import React from "react";
import CardComponent from "@/components/card";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 py-5 min-h-screen">
      <div className="text-center text-xl font-bold">แบบฟอร์มคำร้อง</div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <CardComponent href={`/documents/QF-ITC-0001`} src={"/images/default.png"} document="QF-ITC-0001" title="แบบคำร้องขออุปกรณ์สารสนเทศ" />
        <CardComponent href={`/documents/QF-ITC-0003`} src={"/images/default.png"} document="QF-ITC-0003" title="แบบคำร้องขอเพิ่มระบบและแก้ไขปรับปรุงระบบ" />
        <CardComponent href={`/documents/QF-ITC-0005`} src={"/images/default.png"} document="QF-ITC-0005" title="แบบคำร้องขอชื่ออีเมล" />
        <CardComponent href={`/documents/QF-ITC-0006`} src={"/images/default.png"} document="QF-ITC-0006" title="แบบคำร้องขอใช้งานระบบ Join Domain" />
        <CardComponent href={`/documents/QF-ITC-0007`} src={"/images/default.png"} document="QF-ITC-0007" title="แบบคำร้องขอยกเลิกการใช้งานโดเมน/อีเมล" />
        <CardComponent href={`/documents/QF-ITC-0009`} src={"/images/default.png"} document="QF-ITC-0009" title="แบบฟอร์มขอยืมใช้อุปกรณ์สารสนเทศ" />
        <CardComponent href={`/documents/QF-ITC-0010`} src={"/images/default.png"} document="QF-ITC-0010" title="แบบฟอร์มขอเบิกอุปกรณ์ไอที" />
      </div>
    </main>
  );
}