import React, { useRef } from "react";

function List() {
  const child2Ref = useRef(null);

  return (
    <div>
      <Child1 child2Ref={child2Ref} />
      <Child2 ref={child2Ref} />
    </div>
  );
}

function Child1(props) {
  function handleButtonClick() {
    if (props.child2Ref.current) {
      console.log(props.child2Ref)
      props.child2Ref.current.updateChild2State();
    }
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Update Child 2 State</button>
    </div>
  );
}

const Child2 = React.forwardRef((props, ref) => {
  const updateChild2State = () => {
    console.log("Child 2 State Updated!");
  };

  React.useImperativeHandle(ref, () => ({
    updateChild2State
  }));

  return (
    <div>
      <h2>Child 2 Component</h2>
    </div>
  );
});

export default List;
