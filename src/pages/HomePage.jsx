export default function HomePage() {
  return (
    <>
      <main>
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="img/fakeStore.png"
                  alt="store_hero"
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h2 className="display-5 fw-bold">Site Landing Page</h2>
                <p className="lead">Breve Descrizione</p>
                <a href="#" className="btn btn-primary btn-lg mt-3">
                  Scopri di più
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
