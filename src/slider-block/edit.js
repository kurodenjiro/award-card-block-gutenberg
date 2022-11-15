const { MediaUpload, PlainText } = wp.editor;

export default function Edit(props) {

    const { carousels } = props.attributes;
    console.log(carousels);

    if (!props.attributes.id) {
        const id = `carousel${Math.floor(Math.random() * 100)}`;
        props.setAttributes({
            id,
        });
    }

    const carouselsList = carousels
        .sort((a, b) => a.index - b.index)
        .map((carousel) => {
            return (
                <div className="everise-carousel-block">
                    <p>
                        <span>
                            Insert Award {Number(carousel.index) + 1} Here:
                        </span>
                        <span
                            className="remove-carousel"
                            onClick={() => {
                                const newCarousel = carousels
                                    .filter((item) => item.index != carousel.index)
                                    .map((t) => {
                                        if (t.index > carousel.index) {
                                            t.index -= 1;
                                        }

                                        return t;
                                    });

                                props.setAttributes({
                                    carousels: newCarousel,
                                });
                            }}
                        >
                            <i className="fa fa-times" />
                        </span>
                    </p>
                    <card >
                        {/* <label>Content:</label> */}
                        <PlainText
                            className="content-plain-text"
                            style={{ height: 58 }}
                            placeholder="Content Text"
                            value={carousel.content}
                            autoFocus
                            onChange={(content) => {
                                const newObject = Object.assign({}, carousel, {
                                    content: content,
                                });
                                props.setAttributes({
                                    carousels: [
                                        ...carousels.filter(
                                            (item) => item.index != carousel.index
                                        ),
                                        newObject,
                                    ],
                                });
                            }}
                        />
                        <PlainText
                            className="content-plain-text"
                            style={{ height: 58 }}
                            placeholder="Content Text 2"
                            value={carousel.content2}
                            autoFocus
                            onChange={(content2) => {
                                const newObject = Object.assign({}, carousel, {
                                    content2: content2,
                                });
                                props.setAttributes({
                                    carousels: [
                                        ...carousels.filter(
                                            (item) => item.index != carousel.index
                                        ),
                                        newObject,
                                    ],
                                });
                            }}
                        />
                        <div className="row">
                            <div className="everise__picture col-3">
                                <MediaUpload
                                    onSelect={(media) => {
                                        const image = media.sizes.medium
                                            ? media.sizes.medium.url
                                            : media.url;
                                        const newObject = Object.assign({}, carousel, {
                                            image: image,
                                        });
                                        props.setAttributes({
                                            carousels: [
                                                ...carousels.filter(
                                                    (item) => item.index != carousel.index
                                                ),
                                                newObject,
                                            ],
                                        });
                                    }}
                                    type="image"
                                    value={carousel.image}
                                    render={({ open }) =>
                                        !!carousel.image ? (
                                            <div>
                                                {props.isSelected && (
                                                    <div className="everise__picture__actions">
                                                        <a
                                                            href="#"
                                                            onClick={() => {
                                                                const newObject = Object.assign(
                                                                    {},
                                                                    carousel,
                                                                    {
                                                                        image: null,
                                                                    }
                                                                );
                                                                props.setAttributes({
                                                                    carousels: [
                                                                        ...carousels.filter(
                                                                            (item) =>
                                                                                item.index != carousel.index
                                                                        ),
                                                                        newObject,
                                                                    ],
                                                                });
                                                            }}
                                                        >
                                                            × Remove
                                                        </a>
                                                    </div>
                                                )}

                                                <div
                                                    className="everise__picture__image"
                                                    style={{
                                                        backgroundImage: `url(${carousel.image})`,
                                                    }}
                                                    onClick={open}
                                                />
                                            </div>
                                        ) : (
                                                <a
                                                    href="#"
                                                    className="everise__picture__image"
                                                    onClick={open}
                                                >
                                                    Select Image
                                                </a>
                                            )
                                    }
                                />
                            </div>
                            <div className="col-9 mt-3">
                                <PlainText
                                    className="author-plain-text"
                                    placeholder="Author"
                                    value={carousel.author}
                                    onChange={(author) => {
                                        const newObject = Object.assign({}, carousel, {
                                            author: author,
                                        });
                                        props.setAttributes({
                                            carousels: [
                                                ...carousels.filter(
                                                    (item) => item.index != carousel.index
                                                ),
                                                newObject,
                                            ],
                                        });
                                    }}
                                />
                                {/* <label>Link:</label> */}
                                <PlainText
                                    className="link-plain-text"
                                    placeholder="Link to Author Profile"
                                    value={carousel.link}
                                    onChange={(link) => {
                                        const newObject = Object.assign({}, carousel, {
                                            link: link,
                                        });
                                        props.setAttributes({
                                            carousels: [
                                                ...carousels.filter(
                                                    (item) => item.index != carousel.index
                                                ),
                                                newObject,
                                            ],
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </card>
                </div>
            );
        });
    return (
        <div className={props.className}>
            {carouselsList}
            <button
                className="add-more-carousel"
                onClick={(content) =>{
                    console.log("hello");
                    console.log(props.attributes.carousels.length);
                    props.setAttributes({
                        carousels: [
                            ...props.attributes.carousels,
                            {
                                index: props.attributes.carousels.length,
                                content: "",
                                content2:"",
                                author: "",
                                link: "",
                            },
                        ],
                    })
                }

                }
            >
                +
            </button>
        </div>
    );
}