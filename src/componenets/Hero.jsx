import ProfilePic from '../assets/ProfilePic.jpeg';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Apar Mohabansi
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Computer Science Major
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Welcome to my portfolio! I am a junior at Michigan State University's Honors College,
              pursuing a degree in Computer Science with a minor in Business. I enjoy exploring
              the intersection of coding, problem-solving, and creativity. Whether I'm building
              projects, studying for class, or diving into new technologies, I'm always eager to
              grow and make an impact. Take a look around to learn more about my work, skills, and journey!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={ProfilePic} alt="Apar Mohabansi" className="max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;