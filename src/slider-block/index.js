/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";
import Edit from './edit'
import Save from './save'

const __ = wp.i18n.__; // The __() for internationalization.
const registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.
const { MediaUpload, PlainText } = wp.editor;

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("award-and-accomplishments-block/award-and-accomplishments-block", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("Award and Accomplishments Block"), // Block title.
	icon: "awards", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__("Award and Accomplishments Block"), __("award-and-accomplishments-block")],

	attributes: {
		id: {
			source: "attribute",
			selector: ".slicky.slide",
			attribute: "id",
		},
		carousels: {
			source: "query",
			default: [],
			selector: "card.slicky-item",
			query: {
				index: {
					source: "text",
					selector: "span.slicky-index",
				},
				image: {
					source: "attribute",
					selector: "img",
					attribute: "src",
				},
				content: {
					source: "text",
					selector: "span.slicky-text",
				},
				content2: {
					source: "text",
					selector: "span.slicky-text-2",
				},
				author: {
					source: "text",
					selector: "span.slicky-author-text",
				},
				link: {
					source: "text",
				},
			},
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */

	// The "edit" property must be a valid function.
	edit: Edit,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: Save,
});
