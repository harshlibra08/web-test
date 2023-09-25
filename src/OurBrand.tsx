import { Paper, Container, Grid, Col, Text, Image } from "@mantine/core";
import React from "react";
import RectangleGrey from "./Assets/Rectangle3683.png";
import BrandImg from "./Assets/brand.png";
type Props = {};

const OurBrand = (props: Props) => {
	return (
		<Paper w={1440} h={696} withBorder bg={"black"}>
			<Container>
				<Grid gutter="lg">
					<Col span={6}>
						<Text
							size="32px"
							w={558}
							h={102}
							weight={600}
							pt={206}
							style={{ lineHeight: "51.2px" }}
							color="#F6F6F6"
							ml={-100}
						>
							Our Brand
						</Text>
						<Text
							h={110}
							w={596}
							color="#E4E8ED"
							size={14}
							weight={400}
							pt={96}
							ml={-100}
							style={{ lineHeight: "22.4px" }}
						>
							Our systems and instruments are developed and designed by a team of skilled engineers,
							who hold expertise in their respective field. We offer our clients with modernized
							development and design services for both software and hardware.
							<br />
							<br />
							Our extensive range of products is closely inspected by industrial experts on
							stringent quality parameters to ensure its smooth functioning, durability,
							reliability, sturdy construction and long service life. We are currently supported by
							1,50,000 instruments, enabling us with an outstanding range of output.
						</Text>
					</Col>
					<Col span={6}>
						<Image
							src={RectangleGrey}
							bg={"black"}
							width={509}
							height={696}
							pos={"absolute"}
							left={931}
							pr={0}
							mt={0}
						/>

						<Image
							src={BrandImg}
							alt="Sample"
							width={493}
							height={451}
							pos={"absolute"}
							mt={126}
							ml={114}
						/>
					</Col>
				</Grid>
			</Container>
		</Paper>
	);
};

export default OurBrand;
