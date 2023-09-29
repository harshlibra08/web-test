import React from "react";
import { Autocomplete, Group, Image, Text, Button, ButtonProps } from "@mantine/core";
import { IconHeart, IconSearch, IconShoppingCart, IconUser } from "@tabler/icons-react";

import Libralogo from "../Assets/librathermtm.png";

const OptionsButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#3E3E3E",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
			},

			label: {
				color: "#FFFFFF",
			},
		}}
		{...props}
	/>
);

export function Navbar() {
	return (
		<Group>
			<Image src={Libralogo} h={40} ml={64} mt={12} w={134} />
			<Text fz={14} ml={34} mt={12}>
				About Us
			</Text>
			<Text fz={14} ml={62} mt={12}>
				Products
			</Text>
			<Text fz={14} ml={64} mt={12}>
				Journals
			</Text>
			<Text fz={14} ml={64} mt={12}>
				Contact Us
			</Text>
			<Autocomplete
				placeholder="Enter your search"
				leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
				radius={32}
				w={308}
				height={34}
				mt={14}
				ml={99}
				styles={{
					input: {
						backgroundColor: "#F0F0F0",

						border: "none",
					},
				}}
			/>
			<IconUser
				style={{ width: "20px", height: "20px", marginTop: "20px", marginLeft: "24px" }}
				color="#555459"
			/>
			<IconHeart style={{ width: "20px", height: "20px", marginTop: "20px" }} color="#555459" />
			<IconShoppingCart
				style={{ width: "20px", height: "20px", marginTop: "20px" }}
				color="#555459"
			/>
			<OptionsButton style={{ marginLeft: "11px", marginTop: "15px" }}>We're Hiring</OptionsButton>
		</Group>
	);
}

export default Navbar;
