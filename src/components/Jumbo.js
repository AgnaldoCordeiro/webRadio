import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className={`from-gray-400 m-3 justify-content
        py-10 px-10
        m-10
      `}>
        <h1 className="display-3">Radio MCR Web</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum unde consectetur, explicabo facilis, voluptatem voluptate itaque aliquid, nostrum ipsam dolorem nobis tenetur dolores. Repellendus omnis eaque, corporis ducimus possimus itaque.</p>
        <hr className="my-2" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium praesentium sint id! Soluta beatae doloremque quos repudiandae eos eaque libero tempore corrupti mollitia. Amet possimus quidem aperiam obcaecati vel.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;