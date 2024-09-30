export default function AboutPage() {
  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center flex-grow">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">О нас</h1>
        <p className="text-gray-600 text-lg mb-6">
          Добро пожаловать на наш сервис, где можно приобрести билеты на лучшие
          события и мероприятия. Мы предлагаем удобную платформу для покупки
          билетов на концерты, фестивали, спортивные события, театральные
          постановки и многое другое.
        </p>

        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Что мы предлагаем?
            </h2>
            <p className="text-gray-600">
              Самый широкий выбор билетов на любые мероприятия: от рок-концертов
              до театральных постановок. Мы постоянно обновляем наш каталог,
              чтобы вы не пропустили ничего интересного.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Наши преимущества
            </h2>
            <p className="text-gray-600">
              Удобный процесс покупки билетов, надежная система оплаты и
              гарантированное наличие билетов. Кроме того, мы регулярно
              предлагаем скидки и акции.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Почему выбирают нас?
            </h2>
            <p className="text-gray-600">
              Тысячи довольных клиентов, которые ценят наше быстрое
              обслуживание, отличную поддержку и разнообразие событий, доступных
              на нашем сайте.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Наши партнёры
          </h2>
          <p className="text-gray-600">
            Мы работаем с ведущими организаторами концертов, спортивных и
            культурных мероприятий, чтобы предложить вам билеты на самые
            популярные события в стране и за её пределами.
          </p>
        </div>
      </div>
    </main>
  );
}
