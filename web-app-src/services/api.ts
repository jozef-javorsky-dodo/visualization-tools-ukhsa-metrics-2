import axios from "axios";

const api = axios.create({
  baseURL: "https://api.ukhsa-dashboard.data.gov.uk",
});

export const getCasesByDay = async () => {
  const response = await api.get(
    "/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_cases_casesByDay"
  );
  return response.data;
};

export const getPCRCountByDay = async () => {
  const response = await api.get(
    "/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay"
  );
  return response.data;
};
