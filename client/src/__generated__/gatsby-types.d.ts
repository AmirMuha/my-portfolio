/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  Portfolio_DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Portfolio_Upload: any;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly project: Maybe<SitePageContextProject>;
};

type SitePageContextProject = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly github_url: Maybe<Scalars['String']>;
  readonly app_url: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly tech_categories: Maybe<ReadonlyArray<Maybe<SitePageContextProjectTech_categories>>>;
};

type SitePageContextProjectTech_categories = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly techs: Maybe<ReadonlyArray<Maybe<SitePageContextProjectTech_categoriesTechs>>>;
};

type SitePageContextProjectTech_categoriesTechs = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly specialChars: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly _xsrcxxxgeneratedxxxgatsbyxschemaxgraphql: Maybe<Scalars['Boolean']>;
  readonly _xsrcxxxgeneratedxxxgatsbyxintrospectionxjson: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GraphQLSource = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
};

type Portfolio_About = {
  readonly id: Scalars['String'];
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly admin_id: Scalars['String'];
  readonly updatedAt: Scalars['Portfolio_DateTime'];
  readonly admin: Portfolio_Admin;
};


type Portfolio_Admin = {
  readonly id: Scalars['String'];
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly resumes: ReadonlyArray<Scalars['String']>;
  readonly confirmed: Scalars['Boolean'];
  readonly createdAt: Scalars['Portfolio_DateTime'];
  readonly updatedAt: Scalars['Portfolio_DateTime'];
  readonly _count: Maybe<Portfolio_AdminCount>;
};

type Portfolio_AdminCount = {
  readonly about: Scalars['Int'];
  readonly messages: Scalars['Int'];
  readonly projects: Scalars['Int'];
};

type Portfolio_AboutWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_AboutWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_AboutWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_AboutWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_AboutWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly title: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly admin: Maybe<Portfolio_AdminRelationFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_StringFilter = {
  readonly equals: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly lt: Maybe<Scalars['String']>;
  readonly lte: Maybe<Scalars['String']>;
  readonly gt: Maybe<Scalars['String']>;
  readonly gte: Maybe<Scalars['String']>;
  readonly contains: Maybe<Scalars['String']>;
  readonly startsWith: Maybe<Scalars['String']>;
  readonly endsWith: Maybe<Scalars['String']>;
  readonly mode: Maybe<Portfolio_QueryMode>;
  readonly not: Maybe<Portfolio_NestedStringFilter>;
};

type Portfolio_QueryMode =
  | 'default'
  | 'insensitive';

type Portfolio_NestedStringFilter = {
  readonly equals: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly lt: Maybe<Scalars['String']>;
  readonly lte: Maybe<Scalars['String']>;
  readonly gt: Maybe<Scalars['String']>;
  readonly gte: Maybe<Scalars['String']>;
  readonly contains: Maybe<Scalars['String']>;
  readonly startsWith: Maybe<Scalars['String']>;
  readonly endsWith: Maybe<Scalars['String']>;
  readonly not: Maybe<Portfolio_NestedStringFilter>;
};

type Portfolio_AdminRelationFilter = {
  readonly is: Maybe<Portfolio_AdminWhereInput>;
  readonly isNot: Maybe<Portfolio_AdminWhereInput>;
};

type Portfolio_AdminWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_AdminWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_AdminWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_AdminWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly email: Maybe<Portfolio_StringFilter>;
  readonly fname: Maybe<Portfolio_StringFilter>;
  readonly lname: Maybe<Portfolio_StringFilter>;
  readonly linkedIn: Maybe<Portfolio_StringFilter>;
  readonly whatsapp: Maybe<Portfolio_StringFilter>;
  readonly instagram: Maybe<Portfolio_StringFilter>;
  readonly github: Maybe<Portfolio_StringFilter>;
  readonly heroImage: Maybe<Portfolio_StringFilter>;
  readonly resumes: Maybe<Portfolio_StringNullableListFilter>;
  readonly confirmed: Maybe<Portfolio_BoolFilter>;
  readonly about: Maybe<Portfolio_AboutListRelationFilter>;
  readonly messages: Maybe<Portfolio_MessageListRelationFilter>;
  readonly projects: Maybe<Portfolio_ProjectListRelationFilter>;
  readonly password: Maybe<Portfolio_StringFilter>;
  readonly createdAt: Maybe<Portfolio_DateTimeFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_StringNullableListFilter = {
  readonly equals: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly has: Maybe<Scalars['String']>;
  readonly hasEvery: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly hasSome: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly isEmpty: Maybe<Scalars['Boolean']>;
};

type Portfolio_BoolFilter = {
  readonly equals: Maybe<Scalars['Boolean']>;
  readonly not: Maybe<Portfolio_NestedBoolFilter>;
};

type Portfolio_NestedBoolFilter = {
  readonly equals: Maybe<Scalars['Boolean']>;
  readonly not: Maybe<Portfolio_NestedBoolFilter>;
};

type Portfolio_AboutListRelationFilter = {
  readonly every: Maybe<Portfolio_AboutWhereInput>;
  readonly some: Maybe<Portfolio_AboutWhereInput>;
  readonly none: Maybe<Portfolio_AboutWhereInput>;
};

type Portfolio_MessageListRelationFilter = {
  readonly every: Maybe<Portfolio_MessageWhereInput>;
  readonly some: Maybe<Portfolio_MessageWhereInput>;
  readonly none: Maybe<Portfolio_MessageWhereInput>;
};

type Portfolio_MessageWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_MessageWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_MessageWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_MessageWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly subject: Maybe<Portfolio_StringFilter>;
  readonly from: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly read_status: Maybe<Portfolio_BoolFilter>;
  readonly answer_status: Maybe<Portfolio_BoolFilter>;
  readonly admin: Maybe<Portfolio_AdminRelationFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly createdAd: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_DateTimeFilter = {
  readonly equals: Maybe<Scalars['Portfolio_DateTime']>;
  readonly in: Maybe<ReadonlyArray<Scalars['Portfolio_DateTime']>>;
  readonly notIn: Maybe<ReadonlyArray<Scalars['Portfolio_DateTime']>>;
  readonly lt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly lte: Maybe<Scalars['Portfolio_DateTime']>;
  readonly gt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly gte: Maybe<Scalars['Portfolio_DateTime']>;
  readonly not: Maybe<Portfolio_NestedDateTimeFilter>;
};

type Portfolio_NestedDateTimeFilter = {
  readonly equals: Maybe<Scalars['Portfolio_DateTime']>;
  readonly in: Maybe<ReadonlyArray<Scalars['Portfolio_DateTime']>>;
  readonly notIn: Maybe<ReadonlyArray<Scalars['Portfolio_DateTime']>>;
  readonly lt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly lte: Maybe<Scalars['Portfolio_DateTime']>;
  readonly gt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly gte: Maybe<Scalars['Portfolio_DateTime']>;
  readonly not: Maybe<Portfolio_NestedDateTimeFilter>;
};

type Portfolio_ProjectListRelationFilter = {
  readonly every: Maybe<Portfolio_ProjectWhereInput>;
  readonly some: Maybe<Portfolio_ProjectWhereInput>;
  readonly none: Maybe<Portfolio_ProjectWhereInput>;
};

type Portfolio_ProjectWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_ProjectWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_ProjectWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_ProjectWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly image: Maybe<Portfolio_StringFilter>;
  readonly type: Maybe<Portfolio_StringFilter>;
  readonly github_url: Maybe<Portfolio_StringFilter>;
  readonly app_url: Maybe<Portfolio_StringFilter>;
  readonly description: Maybe<Portfolio_StringFilter>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryListRelationFilter>;
  readonly questions: Maybe<Portfolio_QuestionListRelationFilter>;
  readonly sketches: Maybe<Portfolio_SketchListRelationFilter>;
  readonly admin: Maybe<Portfolio_AdminRelationFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly createdAt: Maybe<Portfolio_DateTimeFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_TechCategoryListRelationFilter = {
  readonly every: Maybe<Portfolio_TechCategoryWhereInput>;
  readonly some: Maybe<Portfolio_TechCategoryWhereInput>;
  readonly none: Maybe<Portfolio_TechCategoryWhereInput>;
};

type Portfolio_TechCategoryWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly techs: Maybe<Portfolio_TechListRelationFilter>;
  readonly project: Maybe<Portfolio_ProjectRelationFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_TechListRelationFilter = {
  readonly every: Maybe<Portfolio_TechWhereInput>;
  readonly some: Maybe<Portfolio_TechWhereInput>;
  readonly none: Maybe<Portfolio_TechWhereInput>;
};

type Portfolio_TechWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_TechWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_TechWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_TechWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryRelationFilter>;
  readonly tech_category_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_TechCategoryRelationFilter = {
  readonly is: Maybe<Portfolio_TechCategoryWhereInput>;
  readonly isNot: Maybe<Portfolio_TechCategoryWhereInput>;
};

type Portfolio_ProjectRelationFilter = {
  readonly is: Maybe<Portfolio_ProjectWhereInput>;
  readonly isNot: Maybe<Portfolio_ProjectWhereInput>;
};

type Portfolio_QuestionListRelationFilter = {
  readonly every: Maybe<Portfolio_QuestionWhereInput>;
  readonly some: Maybe<Portfolio_QuestionWhereInput>;
  readonly none: Maybe<Portfolio_QuestionWhereInput>;
};

type Portfolio_QuestionWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_QuestionWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_QuestionWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_QuestionWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly question: Maybe<Portfolio_StringFilter>;
  readonly answer: Maybe<Portfolio_AnswerRelationFilter>;
  readonly answer_id: Maybe<Portfolio_StringFilter>;
  readonly project: Maybe<Portfolio_ProjectRelationFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_AnswerRelationFilter = {
  readonly is: Maybe<Portfolio_AnswerWhereInput>;
  readonly isNot: Maybe<Portfolio_AnswerWhereInput>;
};

type Portfolio_AnswerWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_AnswerWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_AnswerWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_AnswerWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly answer: Maybe<Portfolio_StringFilter>;
  readonly question: Maybe<Portfolio_QuestionRelationFilter>;
};

type Portfolio_QuestionRelationFilter = {
  readonly is: Maybe<Portfolio_QuestionWhereInput>;
  readonly isNot: Maybe<Portfolio_QuestionWhereInput>;
};

type Portfolio_SketchListRelationFilter = {
  readonly every: Maybe<Portfolio_SketchWhereInput>;
  readonly some: Maybe<Portfolio_SketchWhereInput>;
  readonly none: Maybe<Portfolio_SketchWhereInput>;
};

type Portfolio_SketchWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_SketchWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_SketchWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_SketchWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly title: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly download_link: Maybe<Portfolio_StringFilter>;
  readonly image: Maybe<Portfolio_StringFilter>;
  readonly project: Maybe<Portfolio_ProjectRelationFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_AboutOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly title: Maybe<Portfolio_SortOrder>;
  readonly body: Maybe<Portfolio_SortOrder>;
  readonly admin: Maybe<Portfolio_AdminOrderByWithRelationInput>;
  readonly admin_id: Maybe<Portfolio_SortOrder>;
  readonly updatedAt: Maybe<Portfolio_SortOrder>;
};

type Portfolio_SortOrder =
  | 'asc'
  | 'desc';

type Portfolio_AdminOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly email: Maybe<Portfolio_SortOrder>;
  readonly fname: Maybe<Portfolio_SortOrder>;
  readonly lname: Maybe<Portfolio_SortOrder>;
  readonly linkedIn: Maybe<Portfolio_SortOrder>;
  readonly whatsapp: Maybe<Portfolio_SortOrder>;
  readonly instagram: Maybe<Portfolio_SortOrder>;
  readonly github: Maybe<Portfolio_SortOrder>;
  readonly heroImage: Maybe<Portfolio_SortOrder>;
  readonly resumes: Maybe<Portfolio_SortOrder>;
  readonly confirmed: Maybe<Portfolio_SortOrder>;
  readonly about: Maybe<Portfolio_AboutOrderByRelationAggregateInput>;
  readonly messages: Maybe<Portfolio_MessageOrderByRelationAggregateInput>;
  readonly projects: Maybe<Portfolio_ProjectOrderByRelationAggregateInput>;
  readonly password: Maybe<Portfolio_SortOrder>;
  readonly createdAt: Maybe<Portfolio_SortOrder>;
  readonly updatedAt: Maybe<Portfolio_SortOrder>;
};

type Portfolio_AboutOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_MessageOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_ProjectOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_AboutScalarFieldEnum =
  | 'id'
  | 'title'
  | 'body'
  | 'admin_id'
  | 'updatedAt';

type Portfolio_Answer = {
  readonly id: Scalars['String'];
  readonly answer: Scalars['String'];
  readonly question: Maybe<Portfolio_Question>;
};

type Portfolio_Question = {
  readonly id: Scalars['String'];
  readonly question: Scalars['String'];
  readonly answer_id: Scalars['String'];
  readonly project_id: Scalars['String'];
  readonly answer: Portfolio_Answer;
  readonly project: Portfolio_Project;
};

type Portfolio_Project = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly description: Scalars['String'];
  readonly admin_id: Scalars['String'];
  readonly createdAt: Scalars['Portfolio_DateTime'];
  readonly updatedAt: Scalars['Portfolio_DateTime'];
  readonly _count: Maybe<Portfolio_ProjectCount>;
  readonly tech_categories: ReadonlyArray<Portfolio_TechCategory>;
  readonly questions: ReadonlyArray<Portfolio_Question>;
  readonly sketches: ReadonlyArray<Portfolio_Sketch>;
  readonly admin: Portfolio_Admin;
};


type Portfolio_Project_tech_categoriesArgs = {
  where: Maybe<Portfolio_TechCategoryWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_TechCategoryOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_TechCategoryWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarFieldEnum>>;
};


type Portfolio_Project_questionsArgs = {
  where: Maybe<Portfolio_QuestionWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_QuestionOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_QuestionWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_QuestionScalarFieldEnum>>;
};


type Portfolio_Project_sketchesArgs = {
  where: Maybe<Portfolio_SketchWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_SketchOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_SketchWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_SketchScalarFieldEnum>>;
};

type Portfolio_ProjectCount = {
  readonly tech_categories: Scalars['Int'];
  readonly questions: Scalars['Int'];
  readonly sketches: Scalars['Int'];
};

type Portfolio_TechCategory = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly project_id: Scalars['String'];
  readonly _count: Maybe<Portfolio_TechCategoryCount>;
  readonly techs: ReadonlyArray<Portfolio_Tech>;
  readonly project: Portfolio_Project;
};


type Portfolio_TechCategory_techsArgs = {
  where: Maybe<Portfolio_TechWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_TechOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_TechWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_TechScalarFieldEnum>>;
};

type Portfolio_TechCategoryCount = {
  readonly techs: Scalars['Int'];
};

type Portfolio_Tech = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly tech_category_id: Scalars['String'];
  readonly tech_categories: Portfolio_TechCategory;
};

type Portfolio_TechOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly name: Maybe<Portfolio_SortOrder>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryOrderByWithRelationInput>;
  readonly tech_category_id: Maybe<Portfolio_SortOrder>;
};

type Portfolio_TechCategoryOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly name: Maybe<Portfolio_SortOrder>;
  readonly techs: Maybe<Portfolio_TechOrderByRelationAggregateInput>;
  readonly project: Maybe<Portfolio_ProjectOrderByWithRelationInput>;
  readonly project_id: Maybe<Portfolio_SortOrder>;
};

type Portfolio_TechOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_ProjectOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly name: Maybe<Portfolio_SortOrder>;
  readonly image: Maybe<Portfolio_SortOrder>;
  readonly type: Maybe<Portfolio_SortOrder>;
  readonly github_url: Maybe<Portfolio_SortOrder>;
  readonly app_url: Maybe<Portfolio_SortOrder>;
  readonly description: Maybe<Portfolio_SortOrder>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryOrderByRelationAggregateInput>;
  readonly questions: Maybe<Portfolio_QuestionOrderByRelationAggregateInput>;
  readonly sketches: Maybe<Portfolio_SketchOrderByRelationAggregateInput>;
  readonly admin: Maybe<Portfolio_AdminOrderByWithRelationInput>;
  readonly admin_id: Maybe<Portfolio_SortOrder>;
  readonly createdAt: Maybe<Portfolio_SortOrder>;
  readonly updatedAt: Maybe<Portfolio_SortOrder>;
};

type Portfolio_TechCategoryOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_QuestionOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_SketchOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_TechWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_TechScalarFieldEnum =
  | 'id'
  | 'name'
  | 'tech_category_id';

type Portfolio_TechCategoryWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_TechCategoryScalarFieldEnum =
  | 'id'
  | 'name'
  | 'project_id';

type Portfolio_QuestionOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly question: Maybe<Portfolio_SortOrder>;
  readonly answer: Maybe<Portfolio_AnswerOrderByWithRelationInput>;
  readonly answer_id: Maybe<Portfolio_SortOrder>;
  readonly project: Maybe<Portfolio_ProjectOrderByWithRelationInput>;
  readonly project_id: Maybe<Portfolio_SortOrder>;
};

type Portfolio_AnswerOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly answer: Maybe<Portfolio_SortOrder>;
  readonly question: Maybe<Portfolio_QuestionOrderByWithRelationInput>;
};

type Portfolio_QuestionWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_QuestionScalarFieldEnum =
  | 'id'
  | 'question'
  | 'answer_id'
  | 'project_id';

type Portfolio_Sketch = {
  readonly id: Scalars['String'];
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly download_link: Scalars['String'];
  readonly image: Scalars['String'];
  readonly project_id: Scalars['String'];
  readonly project: Portfolio_Project;
};

type Portfolio_SketchOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly title: Maybe<Portfolio_SortOrder>;
  readonly body: Maybe<Portfolio_SortOrder>;
  readonly download_link: Maybe<Portfolio_SortOrder>;
  readonly image: Maybe<Portfolio_SortOrder>;
  readonly project: Maybe<Portfolio_ProjectOrderByWithRelationInput>;
  readonly project_id: Maybe<Portfolio_SortOrder>;
};

type Portfolio_SketchWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_SketchScalarFieldEnum =
  | 'id'
  | 'title'
  | 'body'
  | 'download_link'
  | 'image'
  | 'project_id';

type Portfolio_AnswerWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_AnswerScalarFieldEnum =
  | 'id'
  | 'answer';

type Portfolio_Message = {
  readonly id: Scalars['String'];
  readonly subject: Scalars['String'];
  readonly from: Scalars['String'];
  readonly body: Scalars['String'];
  readonly read_status: Scalars['Boolean'];
  readonly answer_status: Scalars['Boolean'];
  readonly admin_id: Scalars['String'];
  readonly createdAd: Scalars['Portfolio_DateTime'];
  readonly admin: Portfolio_Admin;
};

type Portfolio_MessageWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_MessageOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly subject: Maybe<Portfolio_SortOrder>;
  readonly from: Maybe<Portfolio_SortOrder>;
  readonly body: Maybe<Portfolio_SortOrder>;
  readonly read_status: Maybe<Portfolio_SortOrder>;
  readonly answer_status: Maybe<Portfolio_SortOrder>;
  readonly admin: Maybe<Portfolio_AdminOrderByWithRelationInput>;
  readonly admin_id: Maybe<Portfolio_SortOrder>;
  readonly createdAd: Maybe<Portfolio_SortOrder>;
};

type Portfolio_MessageScalarFieldEnum =
  | 'id'
  | 'subject'
  | 'from'
  | 'body'
  | 'read_status'
  | 'answer_status'
  | 'admin_id'
  | 'createdAd';

type Portfolio_ProjectWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_ProjectScalarFieldEnum =
  | 'id'
  | 'name'
  | 'image'
  | 'type'
  | 'github_url'
  | 'app_url'
  | 'description'
  | 'admin_id'
  | 'createdAt'
  | 'updatedAt';

type Portfolio_AboutCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutAboutInput;
};

type Portfolio_AdminCreateNestedOneWithoutAboutInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutAboutInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutAboutInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
};

type Portfolio_AdminCreateWithoutAboutInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly password: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly resumes: Maybe<Portfolio_AdminCreateresumesInput>;
  readonly messages: Maybe<Portfolio_MessageCreateNestedManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectCreateNestedManyWithoutAdminInput>;
};

type Portfolio_AdminCreateresumesInput = {
  readonly set: ReadonlyArray<Scalars['String']>;
};

type Portfolio_MessageCreateNestedManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_MessageCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_MessageCreateOrConnectWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_MessageCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
};

type Portfolio_MessageCreateWithoutAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly subject: Scalars['String'];
  readonly from: Scalars['String'];
  readonly body: Scalars['String'];
  readonly read_status: Maybe<Scalars['Boolean']>;
  readonly answer_status: Maybe<Scalars['Boolean']>;
  readonly createdAd: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_MessageCreateOrConnectWithoutAdminInput = {
  readonly where: Portfolio_MessageWhereUniqueInput;
  readonly create: Portfolio_MessageCreateWithoutAdminInput;
};

type Portfolio_MessageCreateManyAdminInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_MessageCreateManyAdminInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_MessageCreateManyAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly subject: Scalars['String'];
  readonly from: Scalars['String'];
  readonly body: Scalars['String'];
  readonly read_status: Maybe<Scalars['Boolean']>;
  readonly answer_status: Maybe<Scalars['Boolean']>;
  readonly createdAd: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_ProjectCreateNestedManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_ProjectCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_ProjectCreateOrConnectWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_ProjectCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
};

type Portfolio_ProjectCreateWithoutAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly description: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryCreateNestedManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionCreateNestedManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchCreateNestedManyWithoutProjectInput>;
};

type Portfolio_TechCategoryCreateNestedManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_TechCategoryCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_TechCategoryCreateOrConnectWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_TechCategoryCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
};

type Portfolio_TechCategoryCreateWithoutProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly techs: Maybe<Portfolio_TechCreateNestedManyWithoutTech_categoriesInput>;
};

type Portfolio_TechCreateNestedManyWithoutTech_categoriesInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_TechCreateWithoutTech_categoriesInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_TechCreateOrConnectWithoutTech_categoriesInput>>;
  readonly createMany: Maybe<Portfolio_TechCreateManyTech_categoriesInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
};

type Portfolio_TechCreateWithoutTech_categoriesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type Portfolio_TechCreateOrConnectWithoutTech_categoriesInput = {
  readonly where: Portfolio_TechWhereUniqueInput;
  readonly create: Portfolio_TechCreateWithoutTech_categoriesInput;
};

type Portfolio_TechCreateManyTech_categoriesInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_TechCreateManyTech_categoriesInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_TechCreateManyTech_categoriesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type Portfolio_TechCategoryCreateOrConnectWithoutProjectInput = {
  readonly where: Portfolio_TechCategoryWhereUniqueInput;
  readonly create: Portfolio_TechCategoryCreateWithoutProjectInput;
};

type Portfolio_TechCategoryCreateManyProjectInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_TechCategoryCreateManyProjectInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_TechCategoryCreateManyProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type Portfolio_QuestionCreateNestedManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_QuestionCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_QuestionCreateOrConnectWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_QuestionCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
};

type Portfolio_QuestionCreateWithoutProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly question: Scalars['String'];
  readonly answer: Portfolio_AnswerCreateNestedOneWithoutQuestionInput;
};

type Portfolio_AnswerCreateNestedOneWithoutQuestionInput = {
  readonly create: Maybe<Portfolio_AnswerCreateWithoutQuestionInput>;
  readonly connectOrCreate: Maybe<Portfolio_AnswerCreateOrConnectWithoutQuestionInput>;
  readonly connect: Maybe<Portfolio_AnswerWhereUniqueInput>;
};

type Portfolio_AnswerCreateWithoutQuestionInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly answer: Scalars['String'];
};

type Portfolio_AnswerCreateOrConnectWithoutQuestionInput = {
  readonly where: Portfolio_AnswerWhereUniqueInput;
  readonly create: Portfolio_AnswerCreateWithoutQuestionInput;
};

type Portfolio_QuestionCreateOrConnectWithoutProjectInput = {
  readonly where: Portfolio_QuestionWhereUniqueInput;
  readonly create: Portfolio_QuestionCreateWithoutProjectInput;
};

type Portfolio_QuestionCreateManyProjectInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_QuestionCreateManyProjectInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_QuestionCreateManyProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly question: Scalars['String'];
  readonly answer_id: Scalars['String'];
};

type Portfolio_SketchCreateNestedManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_SketchCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_SketchCreateOrConnectWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_SketchCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
};

type Portfolio_SketchCreateWithoutProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly download_link: Scalars['String'];
  readonly image: Scalars['String'];
};

type Portfolio_SketchCreateOrConnectWithoutProjectInput = {
  readonly where: Portfolio_SketchWhereUniqueInput;
  readonly create: Portfolio_SketchCreateWithoutProjectInput;
};

type Portfolio_SketchCreateManyProjectInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_SketchCreateManyProjectInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_SketchCreateManyProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly download_link: Scalars['String'];
  readonly image: Scalars['String'];
};

type Portfolio_ProjectCreateOrConnectWithoutAdminInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly create: Portfolio_ProjectCreateWithoutAdminInput;
};

type Portfolio_ProjectCreateManyAdminInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_ProjectCreateManyAdminInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_ProjectCreateManyAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly description: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_AdminCreateOrConnectWithoutAboutInput = {
  readonly where: Portfolio_AdminWhereUniqueInput;
  readonly create: Portfolio_AdminCreateWithoutAboutInput;
};

type Portfolio_AdminWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
};

type Portfolio_AboutUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutAboutInput>;
};

type Portfolio_StringFieldUpdateOperationsInput = {
  readonly set: Maybe<Scalars['String']>;
};

type Portfolio_DateTimeFieldUpdateOperationsInput = {
  readonly set: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_AdminUpdateOneRequiredWithoutAboutInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutAboutInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutAboutInput>;
  readonly upsert: Maybe<Portfolio_AdminUpsertWithoutAboutInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
  readonly update: Maybe<Portfolio_AdminUpdateWithoutAboutInput>;
};

type Portfolio_AdminUpsertWithoutAboutInput = {
  readonly update: Portfolio_AdminUpdateWithoutAboutInput;
  readonly create: Portfolio_AdminCreateWithoutAboutInput;
};

type Portfolio_AdminUpdateWithoutAboutInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly email: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly fname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly lname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly linkedIn: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly whatsapp: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly instagram: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly heroImage: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly confirmed: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly password: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly resumes: Maybe<Portfolio_AdminUpdateresumesInput>;
  readonly messages: Maybe<Portfolio_MessageUpdateManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectUpdateManyWithoutAdminInput>;
};

type Portfolio_BoolFieldUpdateOperationsInput = {
  readonly set: Maybe<Scalars['Boolean']>;
};

type Portfolio_AdminUpdateresumesInput = {
  readonly set: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly push: Maybe<ReadonlyArray<Scalars['String']>>;
};

type Portfolio_MessageUpdateManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_MessageCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_MessageCreateOrConnectWithoutAdminInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_MessageUpsertWithWhereUniqueWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_MessageCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_MessageUpdateWithWhereUniqueWithoutAdminInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_MessageUpdateManyWithWhereWithoutAdminInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_MessageScalarWhereInput>>;
};

type Portfolio_MessageUpsertWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_MessageWhereUniqueInput;
  readonly update: Portfolio_MessageUpdateWithoutAdminInput;
  readonly create: Portfolio_MessageCreateWithoutAdminInput;
};

type Portfolio_MessageUpdateWithoutAdminInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly subject: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly from: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly read_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answer_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly createdAd: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_MessageUpdateWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_MessageWhereUniqueInput;
  readonly data: Portfolio_MessageUpdateWithoutAdminInput;
};

type Portfolio_MessageUpdateManyWithWhereWithoutAdminInput = {
  readonly where: Portfolio_MessageScalarWhereInput;
  readonly data: Portfolio_MessageUpdateManyMutationInput;
};

type Portfolio_MessageScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_MessageScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_MessageScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_MessageScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly subject: Maybe<Portfolio_StringFilter>;
  readonly from: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly read_status: Maybe<Portfolio_BoolFilter>;
  readonly answer_status: Maybe<Portfolio_BoolFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly createdAd: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_MessageUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly subject: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly from: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly read_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answer_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly createdAd: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_ProjectUpdateManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_ProjectCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_ProjectCreateOrConnectWithoutAdminInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_ProjectUpsertWithWhereUniqueWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_ProjectCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_ProjectUpdateWithWhereUniqueWithoutAdminInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_ProjectUpdateManyWithWhereWithoutAdminInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_ProjectScalarWhereInput>>;
};

type Portfolio_ProjectUpsertWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly update: Portfolio_ProjectUpdateWithoutAdminInput;
  readonly create: Portfolio_ProjectCreateWithoutAdminInput;
};

type Portfolio_ProjectUpdateWithoutAdminInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionUpdateManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchUpdateManyWithoutProjectInput>;
};

type Portfolio_TechCategoryUpdateManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_TechCategoryCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_TechCategoryCreateOrConnectWithoutProjectInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_TechCategoryUpsertWithWhereUniqueWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_TechCategoryCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_TechCategoryUpdateWithWhereUniqueWithoutProjectInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_TechCategoryUpdateManyWithWhereWithoutProjectInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarWhereInput>>;
};

type Portfolio_TechCategoryUpsertWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_TechCategoryWhereUniqueInput;
  readonly update: Portfolio_TechCategoryUpdateWithoutProjectInput;
  readonly create: Portfolio_TechCategoryCreateWithoutProjectInput;
};

type Portfolio_TechCategoryUpdateWithoutProjectInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly techs: Maybe<Portfolio_TechUpdateManyWithoutTech_categoriesInput>;
};

type Portfolio_TechUpdateManyWithoutTech_categoriesInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_TechCreateWithoutTech_categoriesInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_TechCreateOrConnectWithoutTech_categoriesInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_TechUpsertWithWhereUniqueWithoutTech_categoriesInput>>;
  readonly createMany: Maybe<Portfolio_TechCreateManyTech_categoriesInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_TechUpdateWithWhereUniqueWithoutTech_categoriesInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_TechUpdateManyWithWhereWithoutTech_categoriesInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_TechScalarWhereInput>>;
};

type Portfolio_TechUpsertWithWhereUniqueWithoutTech_categoriesInput = {
  readonly where: Portfolio_TechWhereUniqueInput;
  readonly update: Portfolio_TechUpdateWithoutTech_categoriesInput;
  readonly create: Portfolio_TechCreateWithoutTech_categoriesInput;
};

type Portfolio_TechUpdateWithoutTech_categoriesInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_TechUpdateWithWhereUniqueWithoutTech_categoriesInput = {
  readonly where: Portfolio_TechWhereUniqueInput;
  readonly data: Portfolio_TechUpdateWithoutTech_categoriesInput;
};

type Portfolio_TechUpdateManyWithWhereWithoutTech_categoriesInput = {
  readonly where: Portfolio_TechScalarWhereInput;
  readonly data: Portfolio_TechUpdateManyMutationInput;
};

type Portfolio_TechScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_TechScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_TechScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_TechScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly tech_category_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_TechUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_TechCategoryUpdateWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_TechCategoryWhereUniqueInput;
  readonly data: Portfolio_TechCategoryUpdateWithoutProjectInput;
};

type Portfolio_TechCategoryUpdateManyWithWhereWithoutProjectInput = {
  readonly where: Portfolio_TechCategoryScalarWhereInput;
  readonly data: Portfolio_TechCategoryUpdateManyMutationInput;
};

type Portfolio_TechCategoryScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_TechCategoryUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_QuestionUpdateManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_QuestionCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_QuestionCreateOrConnectWithoutProjectInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_QuestionUpsertWithWhereUniqueWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_QuestionCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_QuestionUpdateWithWhereUniqueWithoutProjectInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_QuestionUpdateManyWithWhereWithoutProjectInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_QuestionScalarWhereInput>>;
};

type Portfolio_QuestionUpsertWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_QuestionWhereUniqueInput;
  readonly update: Portfolio_QuestionUpdateWithoutProjectInput;
  readonly create: Portfolio_QuestionCreateWithoutProjectInput;
};

type Portfolio_QuestionUpdateWithoutProjectInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly answer: Maybe<Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput>;
};

type Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput = {
  readonly create: Maybe<Portfolio_AnswerCreateWithoutQuestionInput>;
  readonly connectOrCreate: Maybe<Portfolio_AnswerCreateOrConnectWithoutQuestionInput>;
  readonly upsert: Maybe<Portfolio_AnswerUpsertWithoutQuestionInput>;
  readonly connect: Maybe<Portfolio_AnswerWhereUniqueInput>;
  readonly update: Maybe<Portfolio_AnswerUpdateWithoutQuestionInput>;
};

type Portfolio_AnswerUpsertWithoutQuestionInput = {
  readonly update: Portfolio_AnswerUpdateWithoutQuestionInput;
  readonly create: Portfolio_AnswerCreateWithoutQuestionInput;
};

type Portfolio_AnswerUpdateWithoutQuestionInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly answer: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_QuestionUpdateWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_QuestionWhereUniqueInput;
  readonly data: Portfolio_QuestionUpdateWithoutProjectInput;
};

type Portfolio_QuestionUpdateManyWithWhereWithoutProjectInput = {
  readonly where: Portfolio_QuestionScalarWhereInput;
  readonly data: Portfolio_QuestionUpdateManyMutationInput;
};

type Portfolio_QuestionScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_QuestionScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_QuestionScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_QuestionScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly question: Maybe<Portfolio_StringFilter>;
  readonly answer_id: Maybe<Portfolio_StringFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_QuestionUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_SketchUpdateManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_SketchCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_SketchCreateOrConnectWithoutProjectInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_SketchUpsertWithWhereUniqueWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_SketchCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_SketchUpdateWithWhereUniqueWithoutProjectInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_SketchUpdateManyWithWhereWithoutProjectInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_SketchScalarWhereInput>>;
};

type Portfolio_SketchUpsertWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_SketchWhereUniqueInput;
  readonly update: Portfolio_SketchUpdateWithoutProjectInput;
  readonly create: Portfolio_SketchCreateWithoutProjectInput;
};

type Portfolio_SketchUpdateWithoutProjectInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly download_link: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_SketchUpdateWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_SketchWhereUniqueInput;
  readonly data: Portfolio_SketchUpdateWithoutProjectInput;
};

type Portfolio_SketchUpdateManyWithWhereWithoutProjectInput = {
  readonly where: Portfolio_SketchScalarWhereInput;
  readonly data: Portfolio_SketchUpdateManyMutationInput;
};

type Portfolio_SketchScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_SketchScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_SketchScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_SketchScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly title: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly download_link: Maybe<Portfolio_StringFilter>;
  readonly image: Maybe<Portfolio_StringFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_SketchUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly download_link: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_ProjectUpdateWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly data: Portfolio_ProjectUpdateWithoutAdminInput;
};

type Portfolio_ProjectUpdateManyWithWhereWithoutAdminInput = {
  readonly where: Portfolio_ProjectScalarWhereInput;
  readonly data: Portfolio_ProjectUpdateManyMutationInput;
};

type Portfolio_ProjectScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_ProjectScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_ProjectScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_ProjectScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly image: Maybe<Portfolio_StringFilter>;
  readonly type: Maybe<Portfolio_StringFilter>;
  readonly github_url: Maybe<Portfolio_StringFilter>;
  readonly app_url: Maybe<Portfolio_StringFilter>;
  readonly description: Maybe<Portfolio_StringFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly createdAt: Maybe<Portfolio_DateTimeFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_ProjectUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_AffectedRowsOutput = {
  readonly count: Scalars['Int'];
};

type Portfolio_AnswerCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly answer: Scalars['String'];
  readonly question: Maybe<Portfolio_QuestionCreateNestedOneWithoutAnswerInput>;
};

type Portfolio_QuestionCreateNestedOneWithoutAnswerInput = {
  readonly create: Maybe<Portfolio_QuestionCreateWithoutAnswerInput>;
  readonly connectOrCreate: Maybe<Portfolio_QuestionCreateOrConnectWithoutAnswerInput>;
  readonly connect: Maybe<Portfolio_QuestionWhereUniqueInput>;
};

type Portfolio_QuestionCreateWithoutAnswerInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly question: Scalars['String'];
  readonly project: Portfolio_ProjectCreateNestedOneWithoutQuestionsInput;
};

type Portfolio_ProjectCreateNestedOneWithoutQuestionsInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutQuestionsInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutQuestionsInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
};

type Portfolio_ProjectCreateWithoutQuestionsInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly description: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryCreateNestedManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchCreateNestedManyWithoutProjectInput>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
};

type Portfolio_AdminCreateNestedOneWithoutProjectsInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutProjectsInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutProjectsInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
};

type Portfolio_AdminCreateWithoutProjectsInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly password: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly resumes: Maybe<Portfolio_AdminCreateresumesInput>;
  readonly about: Maybe<Portfolio_AboutCreateNestedManyWithoutAdminInput>;
  readonly messages: Maybe<Portfolio_MessageCreateNestedManyWithoutAdminInput>;
};

type Portfolio_AboutCreateNestedManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_AboutCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_AboutCreateOrConnectWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_AboutCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
};

type Portfolio_AboutCreateWithoutAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_AboutCreateOrConnectWithoutAdminInput = {
  readonly where: Portfolio_AboutWhereUniqueInput;
  readonly create: Portfolio_AboutCreateWithoutAdminInput;
};

type Portfolio_AboutCreateManyAdminInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_AboutCreateManyAdminInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_AboutCreateManyAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_AdminCreateOrConnectWithoutProjectsInput = {
  readonly where: Portfolio_AdminWhereUniqueInput;
  readonly create: Portfolio_AdminCreateWithoutProjectsInput;
};

type Portfolio_ProjectCreateOrConnectWithoutQuestionsInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly create: Portfolio_ProjectCreateWithoutQuestionsInput;
};

type Portfolio_QuestionCreateOrConnectWithoutAnswerInput = {
  readonly where: Portfolio_QuestionWhereUniqueInput;
  readonly create: Portfolio_QuestionCreateWithoutAnswerInput;
};

type Portfolio_AnswerUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly answer: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_QuestionUpdateOneWithoutAnswerInput>;
};

type Portfolio_QuestionUpdateOneWithoutAnswerInput = {
  readonly create: Maybe<Portfolio_QuestionCreateWithoutAnswerInput>;
  readonly connectOrCreate: Maybe<Portfolio_QuestionCreateOrConnectWithoutAnswerInput>;
  readonly upsert: Maybe<Portfolio_QuestionUpsertWithoutAnswerInput>;
  readonly connect: Maybe<Portfolio_QuestionWhereUniqueInput>;
  readonly disconnect: Maybe<Scalars['Boolean']>;
  readonly delete: Maybe<Scalars['Boolean']>;
  readonly update: Maybe<Portfolio_QuestionUpdateWithoutAnswerInput>;
};

type Portfolio_QuestionUpsertWithoutAnswerInput = {
  readonly update: Portfolio_QuestionUpdateWithoutAnswerInput;
  readonly create: Portfolio_QuestionCreateWithoutAnswerInput;
};

type Portfolio_QuestionUpdateWithoutAnswerInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput>;
};

type Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutQuestionsInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutQuestionsInput>;
  readonly upsert: Maybe<Portfolio_ProjectUpsertWithoutQuestionsInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
  readonly update: Maybe<Portfolio_ProjectUpdateWithoutQuestionsInput>;
};

type Portfolio_ProjectUpsertWithoutQuestionsInput = {
  readonly update: Portfolio_ProjectUpdateWithoutQuestionsInput;
  readonly create: Portfolio_ProjectCreateWithoutQuestionsInput;
};

type Portfolio_ProjectUpdateWithoutQuestionsInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchUpdateManyWithoutProjectInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutProjectsInput>;
};

type Portfolio_AdminUpdateOneRequiredWithoutProjectsInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutProjectsInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutProjectsInput>;
  readonly upsert: Maybe<Portfolio_AdminUpsertWithoutProjectsInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
  readonly update: Maybe<Portfolio_AdminUpdateWithoutProjectsInput>;
};

type Portfolio_AdminUpsertWithoutProjectsInput = {
  readonly update: Portfolio_AdminUpdateWithoutProjectsInput;
  readonly create: Portfolio_AdminCreateWithoutProjectsInput;
};

type Portfolio_AdminUpdateWithoutProjectsInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly email: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly fname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly lname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly linkedIn: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly whatsapp: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly instagram: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly heroImage: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly confirmed: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly password: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly resumes: Maybe<Portfolio_AdminUpdateresumesInput>;
  readonly about: Maybe<Portfolio_AboutUpdateManyWithoutAdminInput>;
  readonly messages: Maybe<Portfolio_MessageUpdateManyWithoutAdminInput>;
};

type Portfolio_AboutUpdateManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_AboutCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_AboutCreateOrConnectWithoutAdminInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_AboutUpsertWithWhereUniqueWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_AboutCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_AboutUpdateWithWhereUniqueWithoutAdminInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_AboutUpdateManyWithWhereWithoutAdminInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_AboutScalarWhereInput>>;
};

type Portfolio_AboutUpsertWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_AboutWhereUniqueInput;
  readonly update: Portfolio_AboutUpdateWithoutAdminInput;
  readonly create: Portfolio_AboutCreateWithoutAdminInput;
};

type Portfolio_AboutUpdateWithoutAdminInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_AboutUpdateWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_AboutWhereUniqueInput;
  readonly data: Portfolio_AboutUpdateWithoutAdminInput;
};

type Portfolio_AboutUpdateManyWithWhereWithoutAdminInput = {
  readonly where: Portfolio_AboutScalarWhereInput;
  readonly data: Portfolio_AboutUpdateManyMutationInput;
};

type Portfolio_AboutScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_AboutScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_AboutScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_AboutScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly title: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_AboutUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_MessageCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly subject: Scalars['String'];
  readonly from: Scalars['String'];
  readonly body: Scalars['String'];
  readonly read_status: Maybe<Scalars['Boolean']>;
  readonly answer_status: Maybe<Scalars['Boolean']>;
  readonly createdAd: Maybe<Scalars['Portfolio_DateTime']>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutMessagesInput;
};

type Portfolio_AdminCreateNestedOneWithoutMessagesInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutMessagesInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutMessagesInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
};

type Portfolio_AdminCreateWithoutMessagesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly password: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly resumes: Maybe<Portfolio_AdminCreateresumesInput>;
  readonly about: Maybe<Portfolio_AboutCreateNestedManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectCreateNestedManyWithoutAdminInput>;
};

type Portfolio_AdminCreateOrConnectWithoutMessagesInput = {
  readonly where: Portfolio_AdminWhereUniqueInput;
  readonly create: Portfolio_AdminCreateWithoutMessagesInput;
};

type Portfolio_MessageUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly subject: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly from: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly read_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answer_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly createdAd: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutMessagesInput>;
};

type Portfolio_AdminUpdateOneRequiredWithoutMessagesInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutMessagesInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutMessagesInput>;
  readonly upsert: Maybe<Portfolio_AdminUpsertWithoutMessagesInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
  readonly update: Maybe<Portfolio_AdminUpdateWithoutMessagesInput>;
};

type Portfolio_AdminUpsertWithoutMessagesInput = {
  readonly update: Portfolio_AdminUpdateWithoutMessagesInput;
  readonly create: Portfolio_AdminCreateWithoutMessagesInput;
};

type Portfolio_AdminUpdateWithoutMessagesInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly email: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly fname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly lname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly linkedIn: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly whatsapp: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly instagram: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly heroImage: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly confirmed: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly password: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly resumes: Maybe<Portfolio_AdminUpdateresumesInput>;
  readonly about: Maybe<Portfolio_AboutUpdateManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectUpdateManyWithoutAdminInput>;
};

type Portfolio_ProjectCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly description: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryCreateNestedManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionCreateNestedManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchCreateNestedManyWithoutProjectInput>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
};

type Portfolio_ProjectUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionUpdateManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchUpdateManyWithoutProjectInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutProjectsInput>;
};

type Portfolio_QuestionCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly question: Scalars['String'];
  readonly answer: Portfolio_AnswerCreateNestedOneWithoutQuestionInput;
  readonly project: Portfolio_ProjectCreateNestedOneWithoutQuestionsInput;
};

type Portfolio_QuestionUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly answer: Maybe<Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput>;
};

type Portfolio_SketchCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly download_link: Scalars['String'];
  readonly image: Scalars['String'];
  readonly project: Portfolio_ProjectCreateNestedOneWithoutSketchesInput;
};

type Portfolio_ProjectCreateNestedOneWithoutSketchesInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutSketchesInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutSketchesInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
};

type Portfolio_ProjectCreateWithoutSketchesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly description: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryCreateNestedManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionCreateNestedManyWithoutProjectInput>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
};

type Portfolio_ProjectCreateOrConnectWithoutSketchesInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly create: Portfolio_ProjectCreateWithoutSketchesInput;
};

type Portfolio_SketchUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly download_link: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutSketchesInput>;
};

type Portfolio_ProjectUpdateOneRequiredWithoutSketchesInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutSketchesInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutSketchesInput>;
  readonly upsert: Maybe<Portfolio_ProjectUpsertWithoutSketchesInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
  readonly update: Maybe<Portfolio_ProjectUpdateWithoutSketchesInput>;
};

type Portfolio_ProjectUpsertWithoutSketchesInput = {
  readonly update: Portfolio_ProjectUpdateWithoutSketchesInput;
  readonly create: Portfolio_ProjectCreateWithoutSketchesInput;
};

type Portfolio_ProjectUpdateWithoutSketchesInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionUpdateManyWithoutProjectInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutProjectsInput>;
};

type Portfolio_TechCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly tech_categories: Portfolio_TechCategoryCreateNestedOneWithoutTechsInput;
};

type Portfolio_TechCategoryCreateNestedOneWithoutTechsInput = {
  readonly create: Maybe<Portfolio_TechCategoryCreateWithoutTechsInput>;
  readonly connectOrCreate: Maybe<Portfolio_TechCategoryCreateOrConnectWithoutTechsInput>;
  readonly connect: Maybe<Portfolio_TechCategoryWhereUniqueInput>;
};

type Portfolio_TechCategoryCreateWithoutTechsInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly project: Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput;
};

type Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutTech_categoriesInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
};

type Portfolio_ProjectCreateWithoutTech_categoriesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly description: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly questions: Maybe<Portfolio_QuestionCreateNestedManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchCreateNestedManyWithoutProjectInput>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
};

type Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly create: Portfolio_ProjectCreateWithoutTech_categoriesInput;
};

type Portfolio_TechCategoryCreateOrConnectWithoutTechsInput = {
  readonly where: Portfolio_TechCategoryWhereUniqueInput;
  readonly create: Portfolio_TechCategoryCreateWithoutTechsInput;
};

type Portfolio_TechUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateOneRequiredWithoutTechsInput>;
};

type Portfolio_TechCategoryUpdateOneRequiredWithoutTechsInput = {
  readonly create: Maybe<Portfolio_TechCategoryCreateWithoutTechsInput>;
  readonly connectOrCreate: Maybe<Portfolio_TechCategoryCreateOrConnectWithoutTechsInput>;
  readonly upsert: Maybe<Portfolio_TechCategoryUpsertWithoutTechsInput>;
  readonly connect: Maybe<Portfolio_TechCategoryWhereUniqueInput>;
  readonly update: Maybe<Portfolio_TechCategoryUpdateWithoutTechsInput>;
};

type Portfolio_TechCategoryUpsertWithoutTechsInput = {
  readonly update: Portfolio_TechCategoryUpdateWithoutTechsInput;
  readonly create: Portfolio_TechCategoryCreateWithoutTechsInput;
};

type Portfolio_TechCategoryUpdateWithoutTechsInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput>;
};

type Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutTech_categoriesInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput>;
  readonly upsert: Maybe<Portfolio_ProjectUpsertWithoutTech_categoriesInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
  readonly update: Maybe<Portfolio_ProjectUpdateWithoutTech_categoriesInput>;
};

type Portfolio_ProjectUpsertWithoutTech_categoriesInput = {
  readonly update: Portfolio_ProjectUpdateWithoutTech_categoriesInput;
  readonly create: Portfolio_ProjectCreateWithoutTech_categoriesInput;
};

type Portfolio_ProjectUpdateWithoutTech_categoriesInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly questions: Maybe<Portfolio_QuestionUpdateManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchUpdateManyWithoutProjectInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutProjectsInput>;
};

type Portfolio_TechCategoryCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly techs: Maybe<Portfolio_TechCreateNestedManyWithoutTech_categoriesInput>;
  readonly project: Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput;
};

type Portfolio_TechCategoryUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly techs: Maybe<Portfolio_TechUpdateManyWithoutTech_categoriesInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput>;
};

type Portfolio_LoginInputType = {
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

type Portfolio_AdminCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly password: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly resumes: Maybe<Portfolio_AdminCreateresumesInput>;
  readonly about: Maybe<Portfolio_AboutCreateNestedManyWithoutAdminInput>;
  readonly messages: Maybe<Portfolio_MessageCreateNestedManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectCreateNestedManyWithoutAdminInput>;
};

type Portfolio_AdminUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly email: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly fname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly lname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly linkedIn: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly whatsapp: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly instagram: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly heroImage: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly confirmed: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly password: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly resumes: Maybe<Portfolio_AdminUpdateresumesInput>;
  readonly about: Maybe<Portfolio_AboutUpdateManyWithoutAdminInput>;
  readonly messages: Maybe<Portfolio_MessageUpdateManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectUpdateManyWithoutAdminInput>;
};


type Portfolio = {
  readonly about: Maybe<Portfolio_About>;
  readonly abouts: ReadonlyArray<Portfolio_About>;
  readonly answer: Maybe<Portfolio_Answer>;
  readonly answers: ReadonlyArray<Portfolio_Answer>;
  readonly message: Maybe<Portfolio_Message>;
  readonly messages: ReadonlyArray<Portfolio_Message>;
  readonly project: Maybe<Portfolio_Project>;
  readonly projects: ReadonlyArray<Portfolio_Project>;
  readonly question: Maybe<Portfolio_Question>;
  readonly questions: ReadonlyArray<Portfolio_Question>;
  readonly sketch: Maybe<Portfolio_Sketch>;
  readonly sketches: ReadonlyArray<Portfolio_Sketch>;
  readonly tech: Maybe<Portfolio_Tech>;
  readonly teches: ReadonlyArray<Portfolio_Tech>;
  readonly techCategory: Maybe<Portfolio_TechCategory>;
  readonly techCategories: ReadonlyArray<Portfolio_TechCategory>;
  readonly me: Portfolio_Admin;
  readonly getAdmin: Portfolio_Admin;
  readonly getNumOfAdmins: Maybe<Scalars['Int']>;
};


type Portfolio_aboutArgs = {
  where: Portfolio_AboutWhereUniqueInput;
};


type Portfolio_aboutsArgs = {
  where: Maybe<Portfolio_AboutWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_AboutOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_AboutWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_AboutScalarFieldEnum>>;
};


type Portfolio_answerArgs = {
  where: Portfolio_AnswerWhereUniqueInput;
};


type Portfolio_answersArgs = {
  where: Maybe<Portfolio_AnswerWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_AnswerOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_AnswerWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_AnswerScalarFieldEnum>>;
};


type Portfolio_messageArgs = {
  where: Portfolio_MessageWhereUniqueInput;
};


type Portfolio_messagesArgs = {
  where: Maybe<Portfolio_MessageWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_MessageOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_MessageWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_MessageScalarFieldEnum>>;
};


type Portfolio_projectArgs = {
  where: Portfolio_ProjectWhereUniqueInput;
};


type Portfolio_projectsArgs = {
  where: Maybe<Portfolio_ProjectWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_ProjectOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_ProjectWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_ProjectScalarFieldEnum>>;
};


type Portfolio_questionArgs = {
  where: Portfolio_QuestionWhereUniqueInput;
};


type Portfolio_questionsArgs = {
  where: Maybe<Portfolio_QuestionWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_QuestionOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_QuestionWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_QuestionScalarFieldEnum>>;
};


type Portfolio_sketchArgs = {
  where: Portfolio_SketchWhereUniqueInput;
};


type Portfolio_sketchesArgs = {
  where: Maybe<Portfolio_SketchWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_SketchOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_SketchWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_SketchScalarFieldEnum>>;
};


type Portfolio_techArgs = {
  where: Portfolio_TechWhereUniqueInput;
};


type Portfolio_techesArgs = {
  where: Maybe<Portfolio_TechWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_TechOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_TechWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_TechScalarFieldEnum>>;
};


type Portfolio_techCategoryArgs = {
  where: Portfolio_TechCategoryWhereUniqueInput;
};


type Portfolio_techCategoriesArgs = {
  where: Maybe<Portfolio_TechCategoryWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_TechCategoryOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_TechCategoryWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarFieldEnum>>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly graphQlSource: Maybe<GraphQLSource>;
  readonly allGraphQlSource: GraphQLSourceConnection;
  readonly portfolio: Portfolio;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphQlSourceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
};


type Query_allGraphQlSourceArgs = {
  filter: Maybe<GraphQLSourceFilterInput>;
  sort: Maybe<GraphQLSourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly project: Maybe<SitePageContextProjectFilterInput>;
};

type SitePageContextProjectFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly github_url: Maybe<StringQueryOperatorInput>;
  readonly app_url: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly tech_categories: Maybe<SitePageContextProjectTech_categoriesFilterListInput>;
};

type SitePageContextProjectTech_categoriesFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextProjectTech_categoriesFilterInput>;
};

type SitePageContextProjectTech_categoriesFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly techs: Maybe<SitePageContextProjectTech_categoriesTechsFilterListInput>;
};

type SitePageContextProjectTech_categoriesTechsFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextProjectTech_categoriesTechsFilterInput>;
};

type SitePageContextProjectTech_categoriesTechsFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly specialChars: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly _xsrcxxxgeneratedxxxgatsbyxschemaxgraphql: Maybe<BooleanQueryOperatorInput>;
  readonly _xsrcxxxgeneratedxxxgatsbyxintrospectionxjson: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.project.id'
  | 'context.project.name'
  | 'context.project.image'
  | 'context.project.type'
  | 'context.project.github_url'
  | 'context.project.app_url'
  | 'context.project.description'
  | 'context.project.tech_categories'
  | 'context.project.tech_categories.id'
  | 'context.project.tech_categories.name'
  | 'context.project.tech_categories.techs'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxschemaxgraphql'
  | 'pluginCreator.pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxintrospectionxjson'
  | 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginCreator.pluginOptions.specialChars'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.typeName'
  | 'pluginCreator.pluginOptions.fieldName'
  | 'pluginCreator.pluginOptions.url'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxschemaxgraphql'
  | 'pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxintrospectionxjson'
  | 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginOptions.specialChars'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.typeName'
  | 'pluginOptions.fieldName'
  | 'pluginOptions.url'
  | 'pluginOptions.pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GraphQLSourceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
};


type GraphQLSourceConnection_distinctArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_maxArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_minArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_sumArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphQLSourceFieldsEnum;
};

type GraphQLSourceEdge = {
  readonly next: Maybe<GraphQLSource>;
  readonly node: GraphQLSource;
  readonly previous: Maybe<GraphQLSource>;
};

type GraphQLSourceFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'typeName'
  | 'fieldName';

type GraphQLSourceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphQLSourceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
};

type GraphQLSourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphQLSourceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


type MyQueryQuery = { readonly file: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly file: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly f1: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly f2: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrcpagesaboutMeTsx2780465676QueryVariables = Exact<{ [key: string]: never; }>;


type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrcpagesaboutMeTsx2780465676Query = { readonly portfolio: { readonly abouts: ReadonlyArray<Pick<Portfolio_About, 'id'>> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}