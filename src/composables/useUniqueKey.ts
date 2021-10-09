import { v4 as uuidv4 } from "uuid";

const useUniqueKey = (prefix: string) => {
  const uniqueKey = `${prefix}_${uuidv4()}_`;
  return uniqueKey;
};

export default useUniqueKey;
