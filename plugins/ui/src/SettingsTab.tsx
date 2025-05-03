import Stack from "@mui/material/Stack";
import React from "react";

import { LunaSettings } from "./components";

import { LunaPlugin } from "@luna/core";
import { LunaFeatureFlags } from "./LunaFeatureFlags";
import { LunaPluginSettings } from "./lunaPageComponents/LunaPluginSettings";

export const SettingsTab = React.memo(() => {
	const corePlugins = [];
	for (const pluginName in LunaPlugin.plugins) {
		if (!LunaPlugin.corePlugins.has(pluginName)) continue;
		corePlugins.push(<LunaPluginSettings key={pluginName} plugin={LunaPlugin.plugins[pluginName]} />);
	}
	return (
		<Stack spacing={4}>
			<LunaFeatureFlags />
			<LunaSettings title="Luna core plugins" desc="Plugins providing core luna functionality">
				{corePlugins}
			</LunaSettings>
		</Stack>
	);
});
