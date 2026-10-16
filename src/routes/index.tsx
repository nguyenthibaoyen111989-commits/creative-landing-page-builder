import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Sparkles } from "lucide-react";
import cover from "@/assets/cover.jpg";
import speaker from "@/assets/speaker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workshop Đội Ngũ AI Agent – Huấn luyện cấp tốc" },
      { name: "description", content: "Biến AI thành đội ngũ làm việc thật sự cho bạn. Đăng ký nhận vé và tài nguyên miễn phí." },
      { property: "og:title", content: "Workshop Đội Ngũ AI Agent" },
      { property: "og:description", content: "Biến AI thành đội ngũ làm việc thật sự cho bạn." },
    ],
  }),
  component: Index,
});

const benefits = [
  ["Xây thương hiệu cá nhân bằng AI", "Huấn luyện AI hiểu giọng nói và phong cách riêng của bạn."],
  ["Dựng kênh bán hàng từ con số 0", "Từ ý tưởng đến trang bán hàng có thể chuyển đổi."],
  ["Cài đặt Agent chạy tự động", "Để các trợ lý AI làm việc thay bạn 24/7."],
  ["Đóng gói kỹ năng AI thành sản phẩm", "Biết cách bán và vận hành kỹ năng AI."],
  ["Quà tặng độc quyền", "Bộ tài nguyên dành riêng cho người tham gia."],
  ["Ý tưởng kiếm tiền với AI", "Những mô hình thực tế bạn áp dụng được ngay."],
];
const ticker = ["ĐỘI NGŨ AGENT LÀM VIỆC THAY BẠN", "CHẠY TỰ ĐỘNG 24/7", "KỸ NĂNG AI GIÁ TRỊ CAO", "XÂY CÔNG XƯỞNG AGENT"];

function Cta() {
  return (
    <Link to="/dang-ky" className="inline-block rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-glow transition hover:scale-105">
      NHẬN VÉ & TÀI NGUYÊN MIỄN PHÍ
    </Link>
  );
}

function Index() {
  return (
    <main className="font-sans">
      <section className="bg-hero px-4 pb-16 pt-12 text-center">
        <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3 w-3" /> HUẤN LUYỆN CẤP TỐC 1 LẦN DUY NHẤT
        </span>
        <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
          ĐỘI NGŨ <span className="text-primary">AI AGENT</span>
        </h1>
        <p className="mt-2 text-lg font-semibold text-muted-foreground">Để AI trở thành đội ngũ làm việc thật sự</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold">
          <Calendar className="h-4 w-4 text-primary" /> 20:00 ngày 25/10
        </div>
        <img src={cover} width={1536} height={864} alt="Đội ngũ trợ lý AI làm việc quanh máy tính" className="mx-auto mt-8 w-full max-w-3xl rounded-2xl shadow-glow" />
        <p className="mt-6 text-muted-foreground">👉 Bạn muốn đứng ngoài cuộc chơi AI hay bắt đầu <b className="text-primary">ngay hôm nay?</b></p>
        <div className="mt-4"><Cta /></div>
      </section>

      <div className="overflow-hidden bg-primary py-3 text-primary-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-bold">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => <span key={i}>✦ {t}</span>)}
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">Bạn sẽ nhận được gì?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <div className="text-3xl font-extrabold text-primary">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent px-4 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <img src={speaker} loading="lazy" width={800} height={1008} alt="Diễn giả" className="rounded-2xl shadow-glow" />
          <div>
            <p className="font-semibold text-primary">DIỄN GIẢ</p>
            <h2 className="mt-1 text-3xl font-extrabold">Tên Diễn Giả</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {["AI Expert", "Content Creator", "Vibe Coding"].map((t) => (
                <span key={t} className="rounded-full bg-background px-3 py-1 text-xs font-semibold">{t}</span>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">Nhiều năm kinh nghiệm ứng dụng AI vào kinh doanh, chia sẻ cách kiếm tiền với AI một cách thực tế và hiệu quả.</p>
            <div className="mt-6"><Cta /></div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold">Nơi bạn tìm thấy một cộng đồng</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Cùng hàng trăm nhà sáng tạo đang xây dựng hệ thống AI của riêng mình.</p>
        <div className="mt-8"><Cta /></div>
      </section>
    </main>
  );
}
