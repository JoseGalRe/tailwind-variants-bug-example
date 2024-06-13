'use client';

import { tv } from 'tailwind-variants';

const example = tv({
  slots: {
    example1: 'text-mobile-display-small text-red-500',
    example2: ['text-mobile-display-small text-red-500'],
    example3: ['text-mobile-display-small', 'text-red-500'],
    example4: 'text-red-500 text-mobile-display-small',
    example5: 'text-mobile-display-small',
  },
});

const { example1, example2, example3, example4, example5 } = example();

const Home = () => {
  console.log('values', {
    example1: example1(),
    example2: example2(),
    example3: example3(),
    example4: example4(),
    example5: example5(),
  });

  return (
    <main>
      <div className={example1()}>Example 1 // with color but without custom text style</div>

      <div className={example2()}>Example 2 // with color but without custom text style</div>

      <div className={example3()}>Example 3 // with color but without custom text style</div>

      <div className={example4()}>Example 4 // with custom text style but without color</div>

      <div className={example5()}>Example 5 // only text style</div>

      <div className="text-mobile-display-small text-red-500">Example 6 // all nice</div>
    </main>
  );
};

export default Home;
