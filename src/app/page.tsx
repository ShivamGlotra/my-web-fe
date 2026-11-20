import { Button } from "@/components/Button/Button";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

const Page = () => {
  return (
    <main className="container py-5">
      <ThemeToggle />
      <h1>BootStrap Test</h1>
      <p className="text-secondary">
        Muted text and a <a href="#">link</a>.
      </p>
      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-outline-secondary">Secondary</button>
      </div>
      <div className="card p-3 mb-4">A card</div>
      <input className="form-control" placeholder="Input" />
      <div className="d-flex gap-2 mt-4"></div>
      <Button href="/showcase">Button to showcase</Button>
    </main>
  );
};

export default Page;
