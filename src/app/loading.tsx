export default function Loading() {
  return (
    <div className="page-intro">
      <div className="skeleton loading-title" />
      <div className="card-grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="demo-box skeleton" style={{ height: 200 }} />
        ))}
      </div>
    </div>
  );
}
