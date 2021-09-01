export default function LinkList(props) {
  return (
    <>
      {props.links && props.links.length > 0
        ? props.links.map((link, i) => (
            <div key={i}>
              <a href={link.url}> {link.name} </a>
              {link.tags && link.tags.length > 0
                ? link.tags.map((tag, i) => <span key={i}> {tag.name} </span>)
                : "No tags present"}
            </div>
          ))
        : "No links present"}
    </>
  );
}
