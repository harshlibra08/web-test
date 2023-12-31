import React from "react";
import { Autocomplete, Group, Image, Text, Paper, Burger } from "@mantine/core";
import { IconHeart, IconSearch, IconShoppingCart, IconUser } from "@tabler/icons-react";
import { OptionsButton } from "../BaseApp/App";
import Libralogo from "../Assets/librathermtm.png";
import { useDisclosure } from "@mantine/hooks";
import LogoMobile from "../Assets/LogoMobile.png";

export function Navbar() {
	const [opened, { toggle }] = useDisclosure();
	return (
		<>
			<Paper w={{ base: 360, lg: 1440 }} visibleFrom="md">
				<Group wrap="nowrap" visibleFrom="md" gap={0}>
					<Image src={Libralogo} h={40} ml={64} mt={12} w={134} />
					<Text fz={14} ml={64} mt={12}>
						About Us
					</Text>
					<Text fz={14} ml={64} mt={12}>
						Products
					</Text>
					<Text fz={14} ml={64} mt={12}>
						Journals
					</Text>
					<Text fz={14} ml={64} w={95} mt={12}>
						Contact Us
					</Text>
					<Autocomplete
						placeholder="Enter your search"
						leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
						radius={32}
						w={308}
						height={34}
						mt={14}
						ml={69}
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
					<IconHeart
						style={{ width: "20px", height: "20px", marginTop: "20px", marginLeft: "24px" }}
						color="#555459"
					/>
					<IconShoppingCart
						style={{ width: "20px", height: "20px", marginTop: "20px", marginLeft: "24px" }}
						color="#555459"
					/>
					<OptionsButton style={{ marginLeft: "24px", marginTop: "15px" }}>
						We're Hiring
					</OptionsButton>
				</Group>
			</Paper>
			{/**Mobile View */}
			<Paper w={360} hiddenFrom="xs">
				<Group wrap="nowrap" justify="center" gap={100}>
					<Burger opened={opened} onClick={toggle} />
					<Image src={LogoMobile} w={68} h={41} />
					<IconShoppingCart width={20} height={20} style={{ marginTop: "10px" }} color="#555459" />
				</Group>
			</Paper>

			{/**Tablet View */}
			<Paper h={84} w={1024} hiddenFrom="md" visibleFrom="xs">
				<Group mt={15} ml={36}>
					<Burger opened={opened} onClick={toggle} size={"lg"} mt={20} />
					<Image src={Libralogo} h={60} ml={314} mt={12} w={224} />
					<IconShoppingCart
						width={40}
						height={40}
						style={{ marginTop: "20px", marginLeft: "244px" }}
						color="#555459"
					/>
				</Group>
			</Paper>
		</>
	);
}

export default Navbar;
