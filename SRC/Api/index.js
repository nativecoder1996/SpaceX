import axios from 'axios';

export const RocketData = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/rockets',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }

};

export const LaunchData = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/launches',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const LatestLaunchData = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/launches/latest',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const PastLaunchData = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/launches/past',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const Roadster = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/roadster',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const DragonData = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/dragons',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const CompanyData = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/company',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const crewDetails = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/crew',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const LaunchPadData = async () => {
    try {
        const response = await axios.get(
            'https://api.spacexdata.com/v4/launchpads',
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}