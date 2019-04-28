/**
 * Sticky Columns Container
 */

//  Import CSS.
import "./style.scss";
import classnames from "classnames";
import { SVG, Path, PanelBody, RangeControl } from "@wordpress/components";
import { InnerBlocks, InspectorControls } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { Fragment } from "@wordpress/element";

const TEMPLATE = [
	["ud/sticky-block", { position: "left" }],
	["ud/sticky-block"]
];

registerBlockType("ud/sticky-container", {
	title: __("Sticky Container"),
	icon: (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path d="M24 3h-11v-2h11v2zm0 3h-11v2h11v-2zm0 5h-11v2h11v-2zm0 5h-11v2h11v-2zm0 5h-11v2h11v-2zm-13-20h-11v22h11v-22z" />
		</SVG>
	),
	category: "ud-blocks",
	description: __("Sticky container"),
	keywords: [__("sticky container")],
	supports: {
		align: ["wide", "full"],
		html: false
	},
	attributes: {
		ColumnSize: {
			type: "number",
			default: 5
		}
	},
	edit({ attributes, setAttributes, className }) {
		const { ColumnSize } = attributes;
		const classes = classnames(className, `has-2-columns`);
		return [
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={"Column Size"}
							value={ColumnSize}
							initialPosition={5}
							onChange={value => {
								setAttributes({
									ColumnSize: value
								});
							}}
							min={1}
							max={9}
						/>
					</PanelBody>
				</InspectorControls>
				<div className={classes + " size-" + ColumnSize}>
					<InnerBlocks template={TEMPLATE} templateLock={false} />
				</div>
			</Fragment>
		];
	},
	save({ attributes }) {
		const { ColumnSize } = attributes;
		return (
			<div className={"has-2-columns size-" + ColumnSize}>
				<InnerBlocks.Content />
			</div>
		);
	}
});
