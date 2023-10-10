import { Paper, Container, Grid, Text, Image } from "@mantine/core";
import React from "react";
import RectangleGrey from "./Assets/Rectangle3683.png";
import BrandImg from "./Assets/brand.png";
type Props = {};

const OurBrand = (props: Props) => {
	return (
		<Paper w={1440} h={696} withBorder bg={"black"}>
			<Grid>
				<Grid.Col span={6}>
					<Text
						fz={32}
						fw={600}
						mt={206}
						ml={114}
						style={{ lineHeight: "51.2px", color: "#F6F6F6" }}
					>
						Our Brand
					</Text>
					<Text
						fz={16}
						fw={700}
						mt={24}
						ml={114}
						style={{ lineHeight: "22.4px", color: "#E4E8ED" }}
					>
						Our systems and instruments are developed and designed by a team of skilled engineers,
						who hold expertise in their respective field. We offer our clients with modernized
						development and design services for both software and hardware.
					</Text>
					<Text
						fz={16}
						fw={400}
						mt={24}
						ml={114}
						style={{ lineHeight: "22.4px", color: "#E4E8ED" }}
					>
						Our extensive range of products is closely inspected by industrial experts on stringent
						quality parameters to ensure its smooth functioning, durability, reliability, sturdy
						construction and long service life. We are currently supported by 1,50,000 instruments,
						enabling us with an outstanding range of output.
					</Text>
				</Grid.Col>
				<Grid.Col span={6}>
					<Image
						src={RectangleGrey}
						bg={"black"}
						w={509}
						h={696}
						pos={"absolute"}
						left={931}
						pr={0}
						mt={0}
					/>

					<Image src={BrandImg} alt="Sample" w={493} h={451} pos={"absolute"} mt={126} ml={114} />
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default OurBrand;
