/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const v_votesAPI_auto = {

    /** Gets all entries from 'v_votes' */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/v_votes`, requestOptions);
        return response.data;
    },

    /** Gets an array entries from 'v_votes' by their photoId.
        Note that this always returns an array. */
    getByPhotoId: async function() {
        let response = await axios.get(`${BASE_URL}/v_votes?photoId=${photoId}`, requestOptions);
        return response.data;
    },
};

export { v_votesAPI_auto };