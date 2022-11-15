export default function Save(props) {
    const { id, carousels } = props.attributes;
    const carouselsList = carousels.map(function (carousel) {
        return (
            <div className="slicky">
            <card className="slicky-item">
                <div>
                    {carousel.image && (
                            <img   className="everise__picture__image" src={carousel.image}  />
                    )}
                    <div className="slicky-container">
                        <p>
                            <span className="slicky-index" style={{ display: "none" }}>
                                {carousel.index}
                            </span>
                        </p>
                        {carousel.content && (
                            <p className="slicky-text-container">
                                <span className="slicky-text">{carousel.content}</span>
                            </p>
                        )}
                        {carousel.content2 && (
                            <p className="slicky-content-container">
                                <span className="slicky-content">
                                    <span className="slicky-text-2">{carousel.content2}</span>
                                </span>
                            </p>
                        )}
            
                        {carousel.link ? (
                            <p className="slicky-author-container">
                                <a>
                                        <span className="firstIcon">
                                            1st
                                        </span>
                                    </a>
                                <a rel="noopener" target="_blank" className="slicky-url" href={carousel.link} >
            
                                    <span className="slicky-author-text">
                                        {carousel.author}
                                    </span>
                                </a>
                            </p>
                        ):(
                            <p className="slicky-author-container">
                            <a>
                                    <span className="firstIcon">
                                        1st
                                    </span>
                                </a>
                            <a rel="noopener"  className="slicky-url"  >
        
                                <span className="slicky-author-text">
                                    {carousel.author}
                                </span>
                            </a>
                        </p>
                        )}
                    </div>
                </div>
            </card>
            </div>
        );
    });
    if (carousels.length > 0) {
        return (
            <div className="slicky-slider-award-complishment-block">
                <div className="slicky slide"  id={id}>
                    <div className="slicky-inner slicky-slider-award-block" id="slick-slider">
                        {carouselsList}
                    </div>
                </div>
            </div>
        );
    } else return null;
}