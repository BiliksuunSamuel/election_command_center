const endpoints = {
  regions: (category: string) => `api/regions/${category}`,
  regionOfConstituency: (constituency: any) =>
    "api/region-of-constituency/" + constituency,
  constituencies: "api/constituencies",
  contituencyInRegion: (region: any) => "api/constituencies/" + region,
  rawPresidentialResults: (year: number) =>
    "api/results/presidential/raw/" + year,
  rawParliamentaryResults: (year: number) =>
    "api/results/parliamentary/raw/" + year,
  aggregatedPresidentialResults: (year: number) =>
    "api/results/presidential/aggregated/" + year,
  aggregatedParliamentryResults: (year: number) =>
    "api/results/parliamentary/aggregated/" + year,
};

export default endpoints;
