import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/dang-ky")({
  head: () => ({
    meta: [
      { title: "Đăng ký – Workshop Đội Ngũ AI Agent" },
      { name: "description", content: "Giữ chỗ miễn phí cho buổi huấn luyện cấp tốc về AI Agent." },
      { property: "og:title", content: "Đăng ký Workshop Đội Ngũ AI Agent" },
      { property: "og:description", content: "Giữ chỗ miễn phí và nhận tài nguyên độc quyền." },
    ],
  }),
  component: Register,
});

function Register() {
  const [done, setDone] = useState(false);
  return (
    <main className="flex min-h-screen items-center justify-center bg-hero px-4 font-sans">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-glow">
        {done ? (
          <div className="text-center">
            <h1 className="text-2xl font-extrabold">🎉 Đăng ký thành công!</h1>
            <p className="mt-2 text-muted-foreground">Chúng tôi sẽ liên hệ bạn sớm.</p>
            <Link to="/" className="mt-6 inline-block font-semibold text-primary">← Về trang chủ</Link>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
            <h1 className="text-center text-2xl font-extrabold">Giữ chỗ <span className="text-primary">miễn phí</span></h1>
            {[["Họ và tên", "text"], ["Số điện thoại (Zalo)", "tel"], ["Email", "email"]].map(([l, t]) => (
              <label key={l} className="block text-sm font-semibold">
                {l}
                <input required type={t} className="mt-1 w-full rounded-lg border bg-background px-3 py-2 outline-none focus:border-primary" />
              </label>
            ))}
            <button className="w-full rounded-full bg-primary py-3 font-bold text-primary-foreground shadow-glow">NHẬN VÉ NGAY</button>
          </form>
        )}
      </div>
    </main>
  );
}
