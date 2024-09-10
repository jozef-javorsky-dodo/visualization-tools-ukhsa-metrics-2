"use client";

import { useState, useEffect } from "react";
import { Layout, Typography, Button, Space, Row, Col } from "antd";
import { getCasesByDay, getPCRCountByDay } from "../services/api";
import ChartCard from "../components/ChartCard";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [casesData, setCasesData] = useState([]);
  const [pcrData, setPcrData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cases = await getCasesByDay();
      const pcr = await getPCRCountByDay();

      setCasesData(cases.results);
      setPcrData(pcr.results);
    };
    fetchData();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>📊 UKHSA Metrics 📈📉</title>
        <meta
          name="description"
          content="Visualization Tools: UKHSA metrics."
        />
        <meta name="keywords" content="SPA, web-app, TypeScript, Next.js" />
        <meta
          name="author"
          content="jozef.javorsky.dodo@gmail.com, github.com/jozef-javorsky-dodo,g.dev/jozef-javorsky-dodo"
        />
        <link
          href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABgSURBVDhPYwCC/xRihv9g8AlVAsQHATgbC4aqRWiAsdH5cADTDAVQeUwN2PgwMSziCEkkwaFqAEwSh0Jc4ggOsgHI4jA8agCRBuBQhCKPJo4qgJTGMTAMoImjcEjEDP8Bd2iMgD95onIAAAAASUVORK5CYII="
          sizes="16x16"
          type="image/x-icon"
          rel="icon"
        />
      </head>
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          {" "}
          <Header
            style={{
              display: "flex",
              justifyContent: "center",
              background: "#fff",
            }}
          >
            <Title level={2} style={{ color: "#1890ff" }}>
              📊 Visualization Tools: UKHSA Metrics 📈📉
            </Title>
          </Header>
          <Content style={{ padding: "20px", background: "#f0f2f5" }}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Row justify="space-between" align="middle">
                <Col>
                  <Title level={3}>Visualization Tools UKHSA Metrics 2</Title>
                </Col>
                <Col>
                  <Space>
                    <Button type="primary">Export to PDF</Button>
                    <Button>Notes</Button>
                    <Button>Filter</Button>
                  </Space>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <ChartCard title="COVID-19 Cases By Day" data={casesData} />
                </Col>
                <Col xs={24} sm={12}>
                  <ChartCard
                    title="COVID-19 Testing PCR Count by Day"
                    data={pcrData}
                  />
                </Col>
              </Row>
            </Space>
          </Content>
          <Footer style={{ textAlign: "center", background: "#fff" }}>
            <a
              href="mailto:jozef.javorsky.dodo@gmail.com"
              style={{ marginRight: "10px" }}
            >
              jozef.javorsky.dodo@gmail.com
            </a>
            |{" "}
            <a
              href="https://github.com/jozef-javorsky-dodo"
              style={{ margin: "0 10px" }}
            >
              GitHub
            </a>{" "}
            | <a href="https://g.dev/jozef-javorsky-dodo">Google Dev</a>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
