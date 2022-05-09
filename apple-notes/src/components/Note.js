export default function Note() {
  return (
    <li className='aside--note flex align-center justify-between'>
      <h3 className='aside--note--title flex-75'>
        hello Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
        repudiandae totam omnis dignissimos dolores illum culpa incidunt natus
        necessitatibus quo! Quis dicta veritatis tenetur porro iure
        reprehenderit quod voluptatem ipsa!
      </h3>
      <div className='aside--note--delete flex-5'>
        <div className='trash-solid icon'></div>
      </div>
    </li>
  );
}
