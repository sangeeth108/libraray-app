import { ReturnBook } from "./ReturnBook";
import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Link } from "react-router-dom";
import config from "../../../config";

export const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const base_Url: string = `${config.baseURL}/api/books`;
      const url: string = `${base_Url}?page=0&size=9`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();
      const responseData = responseJson._embedded.books;

      const loadedBooks: BookModel[] = [];
      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };

    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) return <SpinnerLoading />;
  if (httpError) return <div className="container m-5"><p>{httpError}</p></div>;

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold ">
          Find your next <em>“I stayed up too late reading”</em> book
        </h2>
        <p className="text-muted">Browse our top picks below</p>
      </div>

      {/* Desktop Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide d-none d-lg-block shadow rounded"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          {[0, 3, 6].map((start, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row g-4 justify-content-center px-4 py-3">
                {books.slice(start, start + 3).map((book) => (
                  <div className="col-md-4" key={book.id}>
                    <div className="card h-100 border-0 shadow-sm hover-shadow">
                      <ReturnBook book={book} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Mobile View */}
      <div className="d-lg-none mt-4 text-center">
        {books[7] && (
          <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: "90%" }}>
            <ReturnBook book={books[7]} />
          </div>
        )}
      </div>

      <div className="text-center mt-4">
        <Link className="btn btn-lg btn-outline-primary px-4 py-2" to="/search">
          View More Books
        </Link>
      </div>
    </div>
  );
};
