import React, { createContext, useEffect, useState } from "react";
import featuresFlagsDataService from "../data";

export const FeatureFlagsContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [enableFlags, setEnableFlags] = useState({});

    const fetchFeatureFlag = async () => {
        try {
            setLoading(true);
            const response = await featuresFlagsDataService();
            setEnableFlags(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            throw new Error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFeatureFlag();
    }, []);
    return (
        <FeatureFlagsContext.Provider value={{ loading, enableFlags }}>
            {children}
        </FeatureFlagsContext.Provider>
    );
};

export default FeatureFlagGlobalState;
