export const Gallery = () => {
  return (
    <form action="/action_page.php">
      <label htmlFor="img">Select image:</label>
      <input type="file" id="img" name="img" accept="image/*" />
      <input type="submit"></input>
    </form>
  );
};

export default Gallery;
