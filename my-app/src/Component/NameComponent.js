import React,{useState,useEffect} from 'react'
import '../CSS/NameComponent.css'

function NameComponent() {
  const [position, setPosition] = useState(0);
  const boxWidth = 100;

  useEffect(() => {
    const handleScroll = (event) => {
      // Calculate the new position based on the scroll event
      const newPosition = position + event.deltaY;

      // Check if the box has reached the end
      const maxPosition = ((window.innerWidth/2)-10) - boxWidth;
      if (newPosition > maxPosition) {
        // Start again from the beginning
        setPosition(0);
      } else if (newPosition < 0) {
        // Reached the left boundary, start from the end
        setPosition(maxPosition);
      } else {
        // Update the position
        setPosition(newPosition);
      }
    };

    // Add event listener for the "wheel" event
    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [position]);
  return (
    <div className='name' >
        <div className='container'>
            <div className='cloud' >
                <div className='rain' >
                    <span style={{'--i':11}}></span>
                    <span style={{'--i':12}}></span>
                    <span style={{'--i':10}}></span>
                    <span style={{'--i':14}}></span>
                    <span style={{'--i':18}}></span>
                    <span style={{'--i':16}}></span>
                    <span style={{'--i':19}}></span>
                    <span style={{'--i':16}}></span>
                    <span style={{'--i':19}}></span>
                    <span style={{'--i':20}}></span>
                    <span style={{'--i':19}}></span>
                    <span style={{'--i':10}}></span>
                    <span style={{'--i':16}}></span>
                    <span style={{'--i':14}}></span>
                    <span style={{'--i':18}}></span>
                    <span style={{'--i':11}}></span>
                    <span style={{'--i':15}}></span>
                    <span style={{'--i':12}}></span>
                    <span style={{'--i':17}}></span>
                    <span style={{'--i':13}}></span>
                    <span style={{'--i':15}}></span>
                </div>
            </div>
            <div className='image'>
            {console.log(position)}
            <div
              style={{
                width: `${boxWidth}px`,
                height: '5px',
                backgroundColor: 'red',
                position: 'relative',
                left: `${position}px`,
                marginRight:'5px',
              }}
            />
            </div>
        </div>
    </div>
  )
}

export default NameComponent