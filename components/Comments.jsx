import React, { useRef, useState, useEffect } from "react";

const Comments = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localstorage, setLocalstorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8">CommentsForm</h3>
        
    </div>
  );
};

export default Comments;
