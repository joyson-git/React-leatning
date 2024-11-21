import React from 'react';

function One(props) {
  console.log(props);
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://i.etsystatic.com/52139499/r/il/1fb10e/6013463425/il_1588xN.6013463425_6xhm.jpg"
          alt="Man showing programming process on a laptop"
        />
      </figure>
    </div>
  );
}

export default One;
