import config from "../app/config";

const Book = ({ book }) => (
  <div className="lg:w-2/3 2xl:w-1/2 mx-auto p-4 xl:pt-16">
    <div className="xl:flex gap-4 bg-gradient-to-br from-red-100 to-yellow-200 rounded-2xl p-4 dark:from-green-700 dark:to-blue-900 shadow-md">
      <div className="xl:flex-1">
        <img
          style={{ minHeight: 400, maxHeight: 500 }}
          className="mx-auto xl:mx-0 rounded-2xl shadow-lg"
          src={book.img}
        />
      </div>
      <div className="xl:flex-1">
        <div className="text-center mt-8 xl:mt-0 xl:text-right">
          <div className="text-6xl">{book.name}</div>
          <div className="mt-4 italic">Some Author</div>
        </div>
        <p className="mt-8 text-justify">
          Duis eget sem sed ex commodo interdum. Ut vel rhoncus nisl. Nam lorem
          urna, cursus rhoncus neque a, lacinia volutpat ex. Fusce bibendum
          molestie auctor. Nunc dolor orci, iaculis at felis dignissim, pretium
          aliquet nunc. Integer sem velit, vehicula nec hendrerit sit amet,
          tempus ac dolor. Maecenas maximus purus a augue eleifend, at
          ullamcorper lectus scelerisque. Ut porta, dolor in rutrum viverra,
          augue tortor vehicula mauris, tempus malesuada libero mauris ut enim.
          Integer tincidunt orci nulla, at fermentum turpis porta at. Vestibulum
          id justo ut mi malesuada tincidunt. Nunc mollis, tellus ut viverra
          vestibulum, ante felis hendrerit nunc, ut volutpat orci quam sed diam.
          Cras imperdiet neque sed sollicitudin hendrerit.
        </p>
      </div>
    </div>
    <div className="mt-8 mb-8 text-2xl">Review</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl erat,
      commodo at mattis eget, tristique nec tellus. Nunc consectetur sit amet
      tellus ut tempus. Phasellus ut ullamcorper erat, ut placerat turpis.
      Quisque blandit urna et augue ornare, id consectetur turpis molestie.
      Vestibulum euismod sed sem non hendrerit. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Duis commodo diam ex, vitae fermentum lectus consectetur eget. Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Nam id leo rhoncus, aliquam enim ac, imperdiet diam. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Sed eu sem eros. Donec dui
      dolor, vulputate nec lacinia id, pretium eu leo. Nullam facilisis
      efficitur lectus vitae varius. Etiam euismod, ligula sed dictum molestie,
      magna lectus consectetur orci, quis vehicula nulla sapien ac metus.
      Vestibulum sit amet diam vel nibh pretium pretium.
      <br />
      <br />
      Duis eget sem sed ex commodo interdum. Ut vel rhoncus nisl. Nam lorem
      urna, cursus rhoncus neque a, lacinia volutpat ex. Fusce bibendum molestie
      auctor. Nunc dolor orci, iaculis at felis dignissim, pretium aliquet nunc.
      Integer sem velit, vehicula nec hendrerit sit amet, tempus ac dolor.
      Maecenas maximus purus a augue eleifend, at ullamcorper lectus
      scelerisque. Ut porta, dolor in rutrum viverra, augue tortor vehicula
      mauris, tempus malesuada libero mauris ut enim. Integer tincidunt orci
      nulla, at fermentum turpis porta at. Vestibulum id justo ut mi malesuada
      tincidunt. Nunc mollis, tellus ut viverra vestibulum, ante felis hendrerit
      nunc, ut volutpat orci quam sed diam. Cras imperdiet neque sed
      sollicitudin hendrerit.
      <br />
      <br />
      Nunc interdum vel enim id venenatis. Sed ac turpis id elit tincidunt
      sagittis ac varius mauris. Nunc ligula mi, tincidunt nec eros sed, auctor
      mollis orci. Sed vitae dui sit amet neque cursus placerat eget eu tellus.
      Pellentesque malesuada nulla rhoncus, gravida mi id, consectetur neque.
      Suspendisse nec libero sodales, congue nunc eget, tincidunt nisl. Duis
      cursus odio urna, ullamcorper egestas libero pretium vitae. Donec ac nibh
      sagittis, tincidunt dolor ac, ornare justo. In varius, tortor vel
      convallis pharetra, mi mi tristique est, vel imperdiet libero ipsum ac
      lorem. Integer elit ipsum, dignissim ac imperdiet quis, pulvinar nec
      ipsum. Mauris suscipit, ex vel feugiat varius, ex mi pulvinar nisi, in
      iaculis turpis urna ut nunc. Aliquam a nisl vel nibh interdum vehicula.
      Curabitur venenatis fermentum gravida. Nullam et vehicula libero, id
      efficitur justo. Proin fermentum felis quis mi fringilla volutpat.
      <br />
      <br />
      Nulla vehicula urna vulputate lectus scelerisque gravida. Pellentesque
      vestibulum ultricies libero. Suspendisse potenti. Mauris eget eros vel
      enim feugiat maximus sit amet et tortor. Nunc non velit dui. Morbi
      scelerisque consectetur lorem nec porta. Ut id felis enim. Duis convallis
      enim a quam feugiat, accumsan euismod augue posuere. Vestibulum
      pellentesque et orci eu viverra.
      <br />
      <br />
      Aenean metus libero, maximus ut erat vel, maximus posuere est. Nam eu
      lacus non massa vulputate sollicitudin. Integer dapibus tincidunt quam,
      nec vestibulum risus facilisis eget. Phasellus sit amet magna ut diam
      rhoncus tincidunt. Maecenas fringilla tincidunt accumsan. Quisque
      tristique, eros at interdum blandit, mi justo ornare massa, fermentum
      dignissim urna mauris non nibh. Aenean varius, ligula id faucibus
      hendrerit, massa augue fermentum tellus, eu cursus metus orci at magna.
    </p>
  </div>
);

export const getStaticPaths = () => {
  const paths = config.books.map((book) => ({
    params: {
      bookId: book.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  return {
    props: {
      book: config.books.find((book) => params.bookId === book.id),
    },
  };
};

export default Book;
