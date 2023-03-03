import { Box, Popper } from "@mui/material";
import { SuperFilter } from "../../components/Filters/SuperFilter";
import { OPTIONS } from "../../dataExamples/OptionList";

export function FiltersPage() {

    return (
        <Box display="flex" width="100vw" paddingLeft={10}>
            <SuperFilter
                title="Простой фильтр"
                options={OPTIONS}
                disableSearch
            />
        </Box>
    )
}   