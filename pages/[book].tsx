import config from "../app/config";

const Book = ({ book }) => (
  <div className="md:w-2/3 xl:w-1/2 mx-auto p-8">
    <div className="flex gap-4">
      <div className="flex-1">
        <img className="" src={book.img} />
      </div>
      <div className="flex-1">
        <div className="text-right">
          <div className="text-6xl">1984</div>
          <div className="italic">George Orwell</div>
        </div>
        <p className="mt-8 text-justify">
          Among the seminal texts of the 20th century, Nineteen Eighty-Four is a
          rare work that grows more haunting as its futuristic purgatory becomes
          more real. Published in 1949, the book offers political satirist
          George Orwell's nightmarish vision of a totalitarian, bureaucratic
          world and one poor stiff's attempt to find individuality. The
          brilliance of the novel is Orwell's prescience of modern life—the
          ubiquity of television, the distortion of the language—and his ability
          to construct such a thorough version of hell. Required reading for
          students since it was published, it ranks among the most terrifying
          novels ever written.
        </p>
      </div>
    </div>
    <div className="mt-8 text-2xl">Review</div>
    <span>
      <br />
      This book is far from perfect. Its characters lack depth, its rhetoric is
      sometimes didactic, its plot (well, half of it anyway) was lifted from
      Zumyatin’s <i>We</i>, and the lengthy Goldstein treatise shoved into the
      middle is a flaw which alters the structure of the novel like a scar
      disfigures a face.
      <br />
      <br />
      But in the long run, all that does not matter, because George Orwell got
      it right.
      <br />
      <br />
      Orwell, a socialist who fought against Franco, watched appalled as the
      great Soviet experiment was reduced to a totalitarian state, a repressive
      force equal in evil to Fascist Italy or Nazi Germany. He came to realize
      that ideology in an authoritarian state is nothing but a distraction, a
      shiny thing made for the public to stare at. He came to realize that the
      point of control was more control, the point of torture was more torture,
      that the point of all their "alternative facts" was to fashion a world
      where people would no longer possess even a word for truth.
      <br />
      <br />
      <i>
        If you want a picture of the future, imagine a boot stamping on a human
        face — forever.
      </i>{" "}
      <br />
      <br />
      Orwell’s vision of the world is grim; too grim, some would argue, for it
      may deprive the faint-hearted among us of hope. But Orwell never wanted to
      take away hope. No, he wished to shock our hearts into resistance by
      showing us the authoritarian nightmare achieved: a monument of stasis, a
      tribute to surveillance and control.
      <br />
      <br />
      Here, in the USA, in 2017, our would-be totalitarians are a long way from
      stasis. Right now they’re stirring up chaos and confusion, spreading lies
      and then denying they spread them, hoping to gaslight us into a muddle of
      helplessness and inactivity. They are trying to destroy a vigorous
      democracy, and they know it will take much chaos and confusion to bring
      that democracy down. They hate us most when we march together, when we
      occupy senate offices and jam the congressional switchboard, when we
      congregate in pubs and coffee houses and share our outrage and fear, for
      they know that freedom thrives on solidarity and resistance, and that
      solidarity and resistance engender love and hope. They much prefer it when
      we brood in solitude, despairing and alone.
      <br />
      <br />
      Which reminds me...one of the things we should <i>never</i> do is brood
      about the enemy’s ideology (
      <i>Is Steve Bannon a Fascist? A Nazi? A Stalinist?</i>), for while we try
      to discern his “ideological goals,” the enemy is busy pulling on his
      boots, and his boots are made with hobnails, with heel irons, and equipped
      with toecaps of steel.
      <br />
      <br />
      Finally, it does not matter who heads up the authoritarian state: a bully
      boy like Mussolini, a strutting coprophiliac like Hitler, a Napoleonic pig
      like Stalin, or a brainless dancing bear like Trump. Whatever the current
      incarnation of “Big Brother” may be, the goal is always the same:
      <blockquote>
        <i>
          A nation of warriors and fanatics, marching forward in perfect unity,
          all thinking the same thoughts and shouting the same slogans,
          perpetually working, fighting, triumphing, persecuting - three hundred
          million people all with the same face.
        </i>
      </blockquote>
    </span>
  </div>
);

export default Book;

export const getStaticPaths = () => ({
  paths: config.books.map((book) => ({
    params: {
      book: book.isbn,
    },
  })),
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const isbn = params.book;

  return {
    props: {
      book: config.books.find((book) => book.isbn === isbn),
    },
  };
};
