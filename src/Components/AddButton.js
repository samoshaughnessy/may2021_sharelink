import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function AddButton(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [url, setURL] = useState("");

  const addLink = () => {
    props.onAddLinkProps(name, url, tags);
    setModal(false);
    setName("");
    setURL("");
    setTags([]);
  };

  const onTagChange = (i, e) => {
    const newTags = tags.slice();
    newTags[i] = {
      name: e.currentTarget.value,
    };
    setTags(newTags);
  };

  return (
    <>
      <Button color="secondary" onClick={() => setModal(!modal)}>
        {" "}
        Add Link{" "}
      </Button>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader>Add Link Form</ModalHeader>
        <ModalBody>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
          <label>URL:</label>
          <br />
          <input
            type="text"
            value={url}
            onChange={(e) => setURL(e.currentTarget.value)}
          />
          <br />
          <label>Tags:</label>
          <br />
          {/* Do not need the inline conditional? */}
          {tags && tags.length > 0
            ? tags.map((tag, i) => {
                return (
                  <input
                    type="text"
                    value={tag.name}
                    onChange={(e) => onTagChange(i, e)}
                  />
                );
              })
            : "No Tags"}
          <br />
          <Button
            color="secondary"
            onClick={() => setTags(tags.concat([{ name: "" }]))}
          >
            Add Tag
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addLink}>
            Submit
          </Button>
          <Button color="danger" onClick={() => setModal(!modal)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
