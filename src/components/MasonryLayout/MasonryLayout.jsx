import "./MasonryLayout.scss";

function MasonryLayout({ items }) {
  return (
    <div className="masonry__layout">
      {items.map((item) => (
        <div
          key={item.id}
          className="masonry__item"
          style={{ height: `17rem`, width: `${item.width}rem` }}>
          {item.content}
        </div>
      ))}
    </div>
  );
}

export default MasonryLayout;
