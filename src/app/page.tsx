const Page = () => {
  return (
    <main className="container py-5">
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
    </main>
  );
};

export default Page;
